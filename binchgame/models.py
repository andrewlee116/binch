from django.db import models
from django.utils import timezone

class Name(models.Model):
    name = models.CharField(max_length=12)

    def __str__(self):
        return self.name
