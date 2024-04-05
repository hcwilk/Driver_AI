from django.db import models

# Create your models here.


class Codebase(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    owner = models.TextField()
    url = models.URLField(default='')

    def __str__(self):
        return self.name