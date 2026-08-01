@echo off
echo Starting all SmartAds Landing Pages...
echo.

echo Starting Cinema Spotlight (Port 3001)...
start "Cinema Spotlight" cmd /k "cd cinema-spotlight-main && npm run dev"

timeout /t 2 /nobreak >nul

echo Starting Magazine Mastery (Port 3002)...
start "Magazine Mastery" cmd /k "cd magazine-mastery-main && npm run dev"

timeout /t 2 /nobreak >nul

echo Starting Newsy Lead Forge (Port 3003)...
start "Newsy Lead Forge" cmd /k "cd newsy-lead-forge-main && npm run dev"

timeout /t 2 /nobreak >nul

echo Starting OTT Ad Hub (Port 3004)...
start "OTT Ad Hub" cmd /k "cd ott-ad-hub-main && npm run dev"

timeout /t 2 /nobreak >nul

echo Starting Radio Connect Hub (Port 3005)...
start "Radio Connect Hub" cmd /k "cd radio-connect-hub-main && npm run dev"

timeout /t 2 /nobreak >nul

echo Starting Sky High Ads (Port 3006)...
start "Sky High Ads" cmd /k "cd sky-high-ads-main && npm run dev"

timeout /t 2 /nobreak >nul

echo Starting Sky High Reach (Port 3007)...
start "Sky High Reach" cmd /k "cd sky-high-reach-main && npm run dev"

echo.
echo All projects are starting in separate windows.
echo Open index.html in your browser to access the navigation hub.
echo.
pause