from django.urls import path
from rest_framework.authtoken import views as restViews
from .views import UserAPIView, TodoAPIListView

urlpatterns = [
    path("users/", UserAPIView.as_view()),
    path("todos/", TodoAPIListView.as_view()),
    path("todos/<pk>/", TodoAPIListView.TodoAPIUpdateView.as_view()),
    path("token-auth", restViews.obtain_auth_token)
]
