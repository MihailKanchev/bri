from django.contrib import admin

# Register your models here.
from .models import Product, ProductImage

class ProductImageAdmin(admin.StackedInline):
    model = ProductImage

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageAdmin]

    class Meta:
        model = Product


admin.site.register(ProductImage)
admin.site.register(Product, ProductAdmin)