from .serializers import UserSerializer, TodoSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User
from .models import TodoList


class UserAPIView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class TodoAPIListView(ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = TodoList.objects.all()

    class TodoAPIUpdateView(RetrieveUpdateDestroyAPIView):
        serializer_class = TodoSerializer
        queryset = TodoList.objects.all()
