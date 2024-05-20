from rest_framework import viewsets
from .models import User, QuestionSet, Question, Tag
from .serializers import UserSerializer, QuestionSetSerializer, QuestionSerializer, TagSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class QuestionSetViewSet(viewsets.ModelViewSet):
    queryset = QuestionSet.objects.all()
    serializer_class = QuestionSetSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer