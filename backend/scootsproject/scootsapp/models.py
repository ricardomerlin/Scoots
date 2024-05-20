from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    pword = models.CharField(max_length=255, default='')
    role = models.CharField(max_length=255, default='student')
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

class QuestionSet(models.Model):
    title = models.CharField(max_length=255)
    owner = models.ManyToManyField(User, related_name='questionsets')

    def __str__(self):
        return self.title

class Tag(models.Model):
    tag_name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.tag_name
    
class Question(models.Model):
    question_sets = models.ManyToManyField(QuestionSet, related_name='questions')
    text = models.TextField()
    answer = models.CharField(max_length=500, default='')
    possible_wrong_answers = models.ManyToManyField('WrongAnswer', related_name='questions')
    tags = models.ManyToManyField(Tag, related_name='questions')

    def __str__(self):
        return self.text
    
class WrongAnswer(models.Model):
    text = models.TextField()
    question = models.ManyToManyField(Question, related_name='wrong_answers')

    def __str__(self):
        return self.text