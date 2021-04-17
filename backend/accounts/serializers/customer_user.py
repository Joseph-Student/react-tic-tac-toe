"""
Serializers para los usuarios.
"""
from rest_framework import serializers

from accounts.models import CustomerUser


class UserSerializer(serializers.ModelSerializer):
    """
    Serializador de los usuarios.
    """

    class Meta:
        model = CustomerUser
        exclude = ["password", "groups", "user_permissions"]
        read_only_fields = ["last_login", "date_joined"]
