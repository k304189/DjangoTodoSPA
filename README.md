# DjangoTodoSPA
Django×React×Dockerのサンプルアプリ（Todo）

## 1回目 Docker構築用のファイルを作成
■ファイル作成
　・.env
　・docker-compose.yml
　・django/Dockerfile
　・django/requirements.txt

## 2回目 Docker環境にプロジェクトファイルを作成する
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

## 3回目 ユーザーモデルを作成する
■コマンド実行
　・docker-compose run --rm api python manage.py startapp todo

■カスタムユーザーのモデルを作成する
　・src/todo/models.py修正
　・src/config/settings.py修正

■マイグレーション
　・docker-compose run --rm api python manage.py makemigrations todo
　・docker-compose run --rm api python manage.py migrate

※参考 docker volumeの保存場所
　　　　→/var/lib/docker/volumes/

## 4回目 #管理ユーザー登録・管理画面表示
■管理者（superuser）を作成
　・（src/todo/models.pyの不具合があったため、修正）
　・docker-compose run --rm api python manage.py createsuperuser
　・src/todo/admin.pyを修正
