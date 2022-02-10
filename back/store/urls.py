from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import cart, cart_add, cart_decrease, cart_increase, cart_remove, categories, hello, latest_products, popular_products, products, services

urlpatterns = [
    path('hello/', hello),

    # Products URLs
    path('products/', products),
    path('categories/', categories),
    path('products/latest/', latest_products),
    path('products/popular/', popular_products),

    # Services URLs
    path('services/', services),

    # Cart URLs
    path('cart/', cart),
    path('cart/add/', cart_add),
    path('cart/increase/', cart_increase),
    path('cart/decrease/', cart_decrease),
    path('cart/remove/', cart_remove),
]

urlpatterns = format_suffix_patterns(urlpatterns)
