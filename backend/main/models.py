from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
import datetime


class TodoList(models.Model):
    title = models.CharField(max_length=200)
    status = models.BooleanField(default=False)
    created_at = models.DateField(default=datetime.datetime.today().date())

    def __str__(self):
        return self.title


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
