from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import QuestionSet, Question

# Create your views here.
def questionset_list(request):
    print('I stink')
    questionsets = QuestionSet.objects.all()
    print(questionsets)
    return render(request, 'scootsapp/questionset_list.html', {'questionsets': questionsets})

def questionset_detail(request, pk):
    questionset = get_object_or_404(QuestionSet, pk=pk, user=request.user)
    return render(request, 'scootsapp/questionset_detail.html', {'questionset': questionset})