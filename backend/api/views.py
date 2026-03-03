from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import UserProfile, Category, Product, ProductVariant, Cart, CartItem, Order, OrderItem
from .serializers import (
    UserSerializer, UserProfileSerializer, CategorySerializer,
    ProductSerializer, ProductVariantSerializer, CartSerializer,
    CartItemSerializer, OrderSerializer
)

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__slug=category)
        return queryset

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user_profile(request):
    profile, created = UserProfile.objects.get_or_create(user=request.user)
    serializer = UserProfileSerializer(profile)
    return Response(serializer.data)

@api_view(['POST'])
def register_user(request):
    data = request.data
    try:
        user = User.objects.create_user(
            username=data['username'],
            email=data['email'],
            password=data['password']
        )
        UserProfile.objects.create(user=user)
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([permissions.IsAuthenticated])
def cart_view(request):
    cart, created = Cart.objects.get_or_create(user=request.user)
    
    if request.method == 'GET':
        serializer = CartSerializer(cart)
        return Response(serializer.data)
        
    elif request.method == 'POST':
        # Add item to cart
        variant_id = request.data.get('product_variant_id')
        quantity = int(request.data.get('quantity', 1))
        
        try:
            variant = ProductVariant.objects.get(id=variant_id)
            cart_item, created = CartItem.objects.get_or_create(
                cart=cart, product_variant=variant,
                defaults={'quantity': quantity}
            )
            if not created:
                cart_item.quantity += quantity
                cart_item.save()
            
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except ProductVariant.DoesNotExist:
            return Response({'error': 'Product variant not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE', 'PUT'])
@permission_classes([permissions.IsAuthenticated])
def cart_item_view(request, item_id):
    try:
        cart_item = CartItem.objects.get(id=item_id, cart__user=request.user)
    except CartItem.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        
    if request.method == 'DELETE':
        cart_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    elif request.method == 'PUT':
        quantity = int(request.data.get('quantity', 1))
        if quantity > 0:
            cart_item.quantity = quantity
            cart_item.save()
            return Response(CartItemSerializer(cart_item).data)
        else:
            cart_item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST', 'GET'])
@permission_classes([permissions.IsAuthenticated])
def order_view(request):
    if request.method == 'GET':
        orders = Order.objects.filter(user=request.user).order_by('-created_at')
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
        
    elif request.method == 'POST':
        try:
            cart = Cart.objects.get(user=request.user)
            items = cart.items.all()
            
            if not items:
                return Response({'error': 'Cart is empty'}, status=status.HTTP_400_BAD_REQUEST)
                
            shipping_address = request.data.get('shipping_address', 'Default Address')
            
            total_price = sum((item.product_variant.product.price * item.quantity) for item in items)
            
            order = Order.objects.create(
                user=request.user,
                total_price=total_price,
                shipping_address=shipping_address
            )
            
            for item in items:
                OrderItem.objects.create(
                    order=order,
                    product_variant=item.product_variant,
                    price=item.product_variant.product.price,
                    quantity=item.quantity
                )
                
                var = item.product_variant
                if var.stock >= item.quantity:
                    var.stock -= item.quantity
                    var.save()
                    
            items.delete()
            
            serializer = OrderSerializer(order)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart is empty'}, status=status.HTTP_400_BAD_REQUEST)

