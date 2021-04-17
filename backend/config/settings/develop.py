"""
Configuraciones de desarrollo.
"""
from .base import * # noqa
from .base import env

# GENERAL
# ----------------------------------------------------------------------------
DEBUG = True

# APPS
# ----------------------------------------------------------------------------
# https://django-debug-toolbar.readthedocs.io/en/latest/installation.html
THIRD_PARTY_APPS.insert(0, "debug_toolbar")
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

# Middleware
MIDDLEWARE.append('debug_toolbar.middleware.DebugToolbarMiddleware')

# EMAIL
# ----------------------------------------------------------------------------
DEFAULT_FROM_EMAIL = env.str("DEFAULT_FROM_EMAIL", default='thebetterjoseph@gmail.com')
EMAIL_BACKEND = env.str("EMAIL_BACKEND", default='django.core.mail.backends.smtp.EmailBackend')
EMAIL_FILE_PATH = env.str('EMAIL_FILE_PATH')
EMAIL_HOST = env.str("EMAIL_HOST", default="localhost")
EMAIL_HOST_USER = env.str("EMAIL_HOST_USER", default='')
EMAIL_HOST_PASSWORD = env.str("EMAIL_HOST_PASSWORD", default='')
EMAIL_SUBJECT_PREFIX = env.str("EMAIL_SUBJECT_PREFIX", default='[Dev] ')
SERVER_EMAIL = env.str("SERVER_EMAIL", default='root@localhost')
EMAIL_PORT = env.int("EMAIL_PORT", default=25)
EMAIL_USE_TLS = env.bool("EMAIL_USE_TLS", default=False)
EMAIL_USE_SSL = env.bool("EMAIL_USE_SSL", default=False)
EMAIL_TIMEOUT = env.int("EMAIL_TIMEOUT", default=240)
EMAIL_USE_LOCALTIME = env.bool("EMAIL_USE_LOCALTIME", default=False)

# DEBUG TOOLBAR
# ----------------------------------------------------------------------------
# https://django-debug-toolbar.readthedocs.io/en/latest/installation.html
INTERNAL_IPS = env.list("DJANGO_INTERNAL_IPS")

# LOGGING
# ----------------------------------------------------------------------------
# https://docs.djangoproject.com/en/3.1/ref/settings/#logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module}'
                      ' {process:d} {thread:d} {message}',
            'style': '{',
        }
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'level': 'DEBUG',
            'formatter': 'verbose'
        }
    },
    'root': {
        'handlers': ['console'],
        'level': 'DEBUG'
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'propagate': True,
        },
        'django.db.backends': {
            'handlers': ['console'],
            'propagate': False,
        }
    }
}
