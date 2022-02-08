from django.contrib import admin


# Register your models here.
from .models import Service, Product, Category, CartDetails


admin.site.register(Service)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(CartDetails)