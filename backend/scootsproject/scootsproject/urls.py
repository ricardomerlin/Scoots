from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from scootsapp.views import UserViewSet, QuestionSetViewSet, QuestionViewSet, TagViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'question_sets', QuestionSetViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'tags', TagViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]