"""
Configuraciones de testing.
"""

from .base import *  # noqa
from .base import env

SECRET_KEY = env.str("DJANGO_SECRET_KEY", default="secret-key-test")
