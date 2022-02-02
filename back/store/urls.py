from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import hello

urlpatterns = [
  path('hello/', hello),
]

urlpatterns = format_suffix_patterns(urlpatterns)