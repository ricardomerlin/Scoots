from django.contrib import admin
from .models import User, QuestionSet, Question, Tag, WrongAnswer, PreviousGame, CurrentSet

# Register your models here.
admin.site.register(User)
admin.site.register(QuestionSet)
admin.site.register(Question)
admin.site.register(Tag)
admin.site.register(WrongAnswer)
admin.site.register(PreviousGame)
admin.site.register(CurrentSet)