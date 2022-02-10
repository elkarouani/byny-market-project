from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CartSerializer, CategorySerializer, ProductSerializer, ServiceSerializer
from .models import CartDetails, Category, Product, Service


@api_view(['GET'])
def hello(request):
    return Response({"message": "Hello, world!"})


@api_view(['GET'])
def products(request):
    products_list = ProductSerializer(Product.objects.all(), many=True).data
    return Response({"data": products_list})


@api_view(['GET'])
def categories(request):
    categories_list = CategorySerializer(
        Category.objects.all(), many=True).data
    return Response({"data": categories_list})


@api_view(['GET'])
def latest_products(request):
    products_list = ProductSerializer(
        Product.objects.order_by('-id')[:4], many=True).data
    return Response({"data": products_list})


@api_view(['GET'])
def popular_products(request):
    products_list = ProductSerializer(
        Product.objects.order_by('-rate')[:4], many=True).data
    return Response({"data": products_list})


@api_view(['GET'])
def services(request):
    services_list = ServiceSerializer(Service.objects.all(), many=True).data
    return Response({"data": services_list})


@api_view(['GET'])
def cart(request):
    cart_list = CartSerializer(CartDetails.objects.all(), many=True).data
    return Response({"data": cart_list})


@api_view(['POST'])
def cart_add(request):
    cart_serializer = CartSerializer(data=request.data)
    if cart_serializer.is_valid():
        cart_serializer.save()
        return Response(cart_serializer.data, status=status.HTTP_201_CREATED)
    return Response(cart_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def cart_increase(request):
    cart_item = CartDetails.objects.get(product=request.data['product'])
    cart_item.quantity += 1
    cart_item.save()
    return Response({"data": CartSerializer(cart_item).data})


@api_view(['PUT'])
def cart_decrease(request):
    cart_item = CartDetails.objects.get(product=request.data['product'])
    cart_item.quantity -= 1
    cart_item.save()
    return Response({"data": CartSerializer(cart_item).data})


@api_view(['DELETE'])
def cart_remove(request):
    cart_item = CartDetails.objects.get(product=request.data['product'])
    cart_item.delete()
    return Response({"data": CartSerializer(cart_item).data})
