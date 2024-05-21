from rest_framework import viewsets
from .models import User, QuestionSet, Question, Tag, WrongAnswer, PreviousGame, CurrentSet
from .serializers import UserSerializer, QuestionSetSerializer, QuestionSerializer, TagSerializer, WrongAnswerSerializer, PreviousGameSerializer, CurrentSetSerializer

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

class WrongAnswerViewSet(viewsets.ModelViewSet):
    queryset = WrongAnswer.objects.all()
    serializer_class = WrongAnswerSerializer

class PreviousGameViewSet(viewsets.ModelViewSet):
    queryset = PreviousGame.objects.all()
    serializer_class = PreviousGameSerializer

class CurrentSetViewSet(viewsets.ModelViewSet):
    queryset = CurrentSet.objects.all()
    serializer_class = CurrentSetSerializer