from django.shortcuts import render

from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
    RetrieveUpdateAPIView
)
from rest_framework.views import APIView
from .models import Product, Category
from rest_framework.response import Response
from rest_framework import status
from .permissions import IsOwnerOrReadOnly
from .serializers import ProductSerializer , CategorySerializer

class ProductListCreateView(ListCreateAPIView): # show data and create another data from list
    queryset = Product.objects.all() # take all object and give him to serilizer
    serializer_class = ProductSerializer # a file resposible to convert python code to JSON data/ format

class ProductDetailView(RetrieveUpdateDestroyAPIView): # reading, Updating and delete
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsOwnerOrReadOnly]

class UserProductView(ListAPIView):
    serializer_class = ProductSerializer
    def get_queryset(self):
        return Product.objects.filter(owner=self.request.user)

class ProductUpdate(RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsOwnerOrReadOnly]

class GetProductImagesView(APIView):
    def get(self, request, format=None):
        if Product.objects.all().exists():
            images = Product.objects.all()
            images = ProductSerializer(images, many=True)
            return Response({"images": images.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "No products found"}, status=status.HTTP_404_NOT_FOUND
            )
        
class ImageUploadView(APIView):
    def post(self, request):
        try:
            data = self.request.data

            image = data["image"]
            name = data["name"]
            description = data["description"]
            date = data["date"]
            rate = data["rate"]
            price = data["price"]
            quantity = data["quantity"]
            category_id = data["category"]

            product = Product.objects.create(
                owner=self.request.user,
                name=name,
                description=description,
                date=date,
                rate=rate,
                image=image,
                price=price,
                quantity=quantity,
                category_id=category_id
            )

            return Response(
                {"success": "Successfully uploaded product"},
                status=status.HTTP_201_CREATED,
            )
        except:
            return Response(
                {"error": "Something went wrong when uploading product"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

class CategoryListCreateView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsOwnerOrReadOnly]