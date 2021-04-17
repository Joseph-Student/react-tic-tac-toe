"""
Vistas para los usuarios.
"""
from rest_framework import viewsets

from accounts.models import CustomerUser
from accounts.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    Vista para devolver a los usuarios.
    """
    queryset = CustomerUser.objects.all()
    serializer_class = UserSerializer
