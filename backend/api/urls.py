from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'products', views.ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
    # Auth
    path('auth/register/', views.register_user, name='register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/profile/', views.get_user_profile, name='profile'),
    
    # Cart
    path('cart/', views.cart_view, name='cart'),
    path('cart/<int:item_id>/', views.cart_item_view, name='cart_item'),
    
    # Order
    path('orders/', views.order_view, name='orders'),
]
