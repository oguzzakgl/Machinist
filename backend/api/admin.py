from django.contrib import admin
from .models import UserProfile, Category, Product, ProductVariant, Cart, CartItem, Order, OrderItem

class ProductVariantInline(admin.TabularInline):
    model = ProductVariant
    extra = 1

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'is_featured', 'created_at']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ProductVariantInline]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(UserProfile)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
