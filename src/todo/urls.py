from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('todo', views.TodoViewSet, 'todo-list')

app_name = 'todo'

urlpatterns = [
    path('', include(router.urls))
]
