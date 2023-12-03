# settings/private.py
from .base import BASE_DIR

SECRET_KEY = 'fvkh1-9vvna)_k2p($&a6v$01t$dr3gl!s4ig&ehwnbkp^@0rs'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / "db.sqlite3",
    }
}

ALLOWED_HOSTS = ['23.20.196.206', '127.0.0.1', 'ec2-23-20-196-206.compute-1.amazonaws.com']

TIME_ZONE = 'Europe/Kiev'
