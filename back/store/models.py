from django.db import models


class Service(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    label = models.CharField(max_length=100)
    illustration = models.ImageField(upload_to='services')
    description = models.TextField()


class Product(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    label = models.CharField(max_length=100)
    illustration = models.ImageField(upload_to='products')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    unit_label = models.CharField(max_length=100)
    unit_value = models.IntegerField()


class Category(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    illustration = models.ImageField(upload_to='categories')
    description = models.TextField()

    class Meta:
        verbose_name_plural = 'categories'


class CartDetails(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    class Meta:
        verbose_name_plural = "Cart Details"
