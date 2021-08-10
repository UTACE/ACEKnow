from django.db import models


# Create your models here.
class Post(models.Model):
    passageName = models.CharField(max_length=200, null=False)
    pubDate = models.DateTimeField('date published')
    catName = models.CharField(max_length=100, null=False)
    passageId = models.IntegerField(null=False)

    def __str__(self):
        return self.passageName
