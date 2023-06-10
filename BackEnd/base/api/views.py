from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

# api_view : takes alist of HTTP method can send to the view
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

#'/api/token', # the first endpoint this is where you can actually submit a username and password and get back access and refresh token  
# '/api/token/refresh', # this will give us a new token based on a refresh token thet sent to the backend.