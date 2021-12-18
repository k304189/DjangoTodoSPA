from django.test import TestCase

from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate

from .models import User, Todo
from .views import TodoViewSet

# Create your tests here.
class TodoListTest(APITestCase):

    """
    Todoの表示テスト
    """

    def setUp(self):
        """
        テストメソッド事の前処理
        """
        user1 = User(email="user1@test.com", name="user1")
        user2 = User(email="user2@test.com", name="user2")
        todo1 = Todo(title="User1 Todo1", content="content1", user=user1)
        todo2 = Todo(title="User2 Todo1", content="content2", user=user2)
        user1.save()
        user2.save()
        todo1.save()
        todo2.save()

    def test_get_todo(self):
        factory = APIRequestFactory()
        user = User.objects.get(name="user1")
        view = TodoViewSet.as_view({'get': 'list'})

        request = factory.get('/api/todo/')
        force_authenticate(request, user=user)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK, 'HTTPステータス200が返ること')
        self.assertEqual(len(response.data["results"]), 1, 'データ件数チェック')
