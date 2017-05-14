from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Name

def index(request):
    return render(request, 'binchgame/index.html',{})

def game(request):
    return render(request, 'binchgame/game.html', {})
