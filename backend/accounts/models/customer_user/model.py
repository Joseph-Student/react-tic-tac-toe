"""
Modelo de usuario personalizado.
"""
from django.contrib.auth.models import AbstractUser

from .managers import CustomerUserManager


class CustomerUser(AbstractUser):
    """
    Modelo personalizado del usuario.
    """

    objects = CustomerUserManager()

    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']

    class Meta(AbstractUser.Meta):
        ordering = ('-date_joined',)

    def __str__(self):
        return self.get_full_name()
