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

## 5回目 #ユーザー操作機能を追加
■コマンド実行
　・docker-compose run --rm api python manage.py startapp user

■ファイル修正・作成
　・src/config/settings.py
　・src/user/serializers.py
　・src/user/views.py
　・src/user/urls.py
　・src/config/urls.py

## 6回目 #トークン認証機能実装
■ファイル修正
　・src/user/serializers.py
　・src/user/views.py
　・src/user/urls.py

■コマンド実行
　・docker-compose run --rm api python manage.py migrate

## 7回目 #Todo機能実装
■ファイル修正
　・src/todo/models.py
　・src/todo/admin.py

■コマンド実行
　・docker-compose run --rm api python manage.py makemigrations todo
　・docker-compose run --rm api python manage.py migrate

■ファイル修正・追加
　・src/config/urls.py
　・src/todo/models.py
　・src/todo/admin.py
　・src/todo/views.py
　・src/user/serializers.py
　・src/todo/serializers.py
　・src/todo/urls.py

## 8回目 #react導入
■ファイル修正
　・.env
　・.gitignore
　・.api/requirements.txt
　・docker-compose.yml

■ディレクトリ作成
　・front

■コマンド実行
　・docker-compose run --rm front sh -c "npm install -g create-react-app && create-react-app react-sample --template typescript"

## 9回目 #react-sampleを削除
■ファイル修正
　・docker-compose.yml

■コマンド実行
　・cp -Rp ./front/react-sample/* ./front/
　・sudo rm -rf ./front/react-sample

## 10回目 #React Router導入
■コマンド実行
　・docker-compose run --rm front sh -c "npm i react-router-dom"
　・docker-compose run --rm front sh -c "npm i @types/jest @types/node @types/react"
　・docker-compose run --rm front sh -c "npm audit fix"
　・docker-compose run --rm front sh -c "npm i @types/react-router-dom"

## 11回目 #Todoをbackendから取得し、frontで表示させる
■コマンド実行
　・docker-compose run --rm front sh -c "npm i axios"

## 12回目 #nginx導入
■コマンド実行
　・docker-compose run --rm api python manage.py collectstatic --noinput

## 13回目 #React・nginxの環境変数対応
■ファイル修正

## flake8をインストール
■ファイル作成
　・django/requirements.txt
■コマンド実行
　・docker-compose run --rm api flake8

## Reactテスト実装
コマンド実行
　・docker-compose run --rm front npm run test
