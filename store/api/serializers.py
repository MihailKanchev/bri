from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Product, ProductImage

class ProductImageSerializer(ModelSerializer):
    image_url = serializers.CharField()
    class Meta:
        model = ProductImage
        fields = ["image_url"]
    
    
    

class ProductSerializer(ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    class Meta():
        
        model = Product
        fields = ["id","name","description","price","images"]

    def create(self, validated_data):
        uploaded_images = validated_data.pop("uploaded_images")
        product = Product.objects.create(**validated_data)
        for image in uploaded_images:
            product_image = ProductImage.objects.create(product=product, image=image)
        return product