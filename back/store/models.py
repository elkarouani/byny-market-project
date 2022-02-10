from django.db import models


class Service(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    label = models.CharField(max_length=100)
    illustration = models.FileField(upload_to='services')
    description = models.TextField()

    def __str__(self):
        return self.label


class Product(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    label = models.CharField(max_length=100)
    illustration = models.ImageField(upload_to='products')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    unit_label = models.CharField(max_length=100)
    unit_value = models.IntegerField()
    rate = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return self.label


class Category(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    illustration = models.ImageField(
        upload_to='categories', blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'categories'


class CartDetails(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return self.product.label + ' x ' + str(self.quantity)

    class Meta:
        verbose_name_plural = "Cart Details"
