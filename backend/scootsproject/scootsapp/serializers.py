from rest_framework import serializers
from .models import User, QuestionSet, Question, Tag, WrongAnswer, PreviousGame, CurrentSet

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'tag_name']

class QuestionSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'question_set', 'text', 'tags']

class QuestionSetSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = QuestionSet
        fields = ['id', 'title', 'user', 'questions']

class UserSerializer(serializers.ModelSerializer):
    questionsets = QuestionSetSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'first_name', 'last_name', 'date_joined', 'questionsets']

class WrongAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = WrongAnswer
        fields = ['id', 'text']

class PreviousGameSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    owner = UserSerializer(many=True, read_only=True)
    players = UserSerializer(many=True, read_only=True)

    class Meta:
        model = PreviousGame
        fields = ['id', 'questions', 'competitive', 'winner', 'date', 'owner', 'players']

class CurrentSetSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = CurrentSet
        fields = ['id', 'questions']