from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

class QuestionSet(models.Model):
    title = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name='questionsets', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Tag(models.Model):
    tag_name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.tag_name
    
class Question(models.Model):
    question_set = models.ForeignKey(QuestionSet, related_name='questions', on_delete=models.CASCADE)
    text = models.TextField()
    tags = models.ManyToManyField(Tag, related_name='questions')

    def __str__(self):
        return self.text
