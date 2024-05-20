from rest_framework import serializers
from .models import User, QuestionSet, Question, Tag

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
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_joined', 'questionsets']
