"""
Manejadores del modelo de usuario.
"""
from django.contrib.auth.models import UserManager


class CustomerUserManager(UserManager):
    """Manejador del usuario."""

    def _create_user(self, username, email, password, first_name, last_name, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username=None, email=None, password=None, first_name=None, last_name=None, **extra_fields):
        """Crea un usuario."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email, password, first_name, last_name, **extra_fields)

    def create_superuser(self, username, email, password, first_name, last_name, **extra_fields):
        """Crea un superuser."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, email, password, first_name, last_name, **extra_fields)
