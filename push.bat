@echo off
setlocal
cd /d "%~dp0"

echo === git status ===
git status --short

git add -A

set "msg=%~1"
if "%msg%"=="" (
  set /p msg=Commit message [blank = auto]:
)
if "%msg%"=="" set "msg=Update %date% %time%"

git commit -m "%msg%"

echo === pushing ===
git push

echo.
echo Done.
pause
