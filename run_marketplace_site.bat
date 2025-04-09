@echo off
cd /d %~dp0

echo 📦 Установка зависимостей...
npm install

echo 🚀 Запуск локального сервера...
start http://localhost:5173
npm run dev

pause