from django.urls import path
from .views import *

urlpatterns = [
    path('',ProductListCreateView.as_view(), name='Products'),
    path('<int:pk>', ProductDetailView.as_view(), name='product'),
    path('upload', ImageUploadView.as_view()),
    path('fetch-images',GetProductImagesView.as_view()),
    path('user-products/',UserProductView.as_view(),name='user-products'),
    path('update/<int:pk>/',ProductUpdate.as_view(),name='product-update'),
    path('categories',CategoryListCreateView.as_view(), name='categories'),
    path('categories/<int:pk>',CategoryDetailView.as_view(), name='category'),
]