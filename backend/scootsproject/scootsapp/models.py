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
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name='questionsets', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Question(models.Model):
    text = models.TextField()
    question_set = models.ForeignKey(QuestionSet, related_name='questions', on_delete=models.CASCADE)

    def __str__(self):
        return self.text

