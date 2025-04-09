@echo off
cd /d %~dp0

:loop
cls
echo 🔄 Проверка обновлений с GitHub...

git pull

echo 🔁 Проверка снова через 60 секунд...
timeout /t 60
goto loop