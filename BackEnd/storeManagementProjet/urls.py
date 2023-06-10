from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/product/',include('product.urls')),
    path('api-auth/', include('rest_framework.urls')), # to see sign in templete rather go to admin

    path('api/', include('base.api.urls')) # base folder -> api folder -> urls file
]
