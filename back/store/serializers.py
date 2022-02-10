from rest_framework import serializers
from .models import CartDetails, Category, Product, Service


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartDetails
        fields = '__all__'