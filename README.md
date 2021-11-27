# DjangoTodoSPA
Django×React×Dockerのサンプルアプリ（Todo）

## 1回目
■ファイル作成
　・.env
　・docker-compose.yml
　・django/Dockerfile
　・django/requirements.txt

## 2回目
■コマンド実行
　・docker-compose build
　・docker-compose run --rm api django-admin.py startproject config .
　・sudo chown -R vagrant:vagrant src ←上記コマンドで作成されたsrcファイルはroot所有のため、所有者変更
　・docker-compose run --rm api django-admin.py startproject config .

■ファイル修正
　・src/todo_project/settings.py
　　　・ALLOWED_HOSTS
　　　・DATABASES
　　　・LANGUAGE_CODE
　　　・TIME_ZONE

■コマンド実行
　・docker-compose up -d

■ファイル作成
　・.gitignore
