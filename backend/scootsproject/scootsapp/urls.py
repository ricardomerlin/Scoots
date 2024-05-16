from django.urls import path
from . import views

urlpatterns = [
    path('questionsets/', views.questionset_list, name='questionset_list'),
    path('questionsets/<int:pk>/', views.questionset_detail, name='questionset_detail'),
]