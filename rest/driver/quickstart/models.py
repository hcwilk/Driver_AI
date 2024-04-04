from django.db import models

# Create your models here.


class Codebase(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey('auth.User', related_name='codebases', on_delete=models.CASCADE)

    def __str__(self):
        return self.name