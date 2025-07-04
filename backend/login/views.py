from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            # Intentar parsear datos JSON
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
        except json.JSONDecodeError:
            # Fallback a datos de formulario
            username = request.POST.get('username')
            password = request.POST.get('password')
        
        user = authenticate(username=username, password=password)
        if user is not None:
            return JsonResponse({'message': f'Bienvenido, {username}!'}, status=200)
        else:
            return JsonResponse({'error': 'Credenciales inválidas'}, status=401)
    return JsonResponse({'error': 'Método no permitido'}, status=405)
