@echo off
echo Building all SmartAds Landing Pages for production...
echo.

echo Building Cinema Spotlight...
cd cinema-spotlight-main
call npm run build
cd ..

echo.
echo Building Magazine Mastery...
cd magazine-mastery-main
call npm run build
cd ..

echo.
echo Building Newsy Lead Forge...
cd newsy-lead-forge-main
call npm run build
cd ..

echo.
echo Building OTT Ad Hub...
cd ott-ad-hub-main
call npm run build
cd ..

echo.
echo Building Radio Connect Hub...
cd radio-connect-hub-main
call npm run build
cd ..

echo.
echo Building Sky High Ads...
cd sky-high-ads-main
call npm run build
cd ..

echo.
echo Building Sky High Reach...
cd sky-high-reach-main
call npm run build
cd ..

echo.
echo All builds completed!
echo Built files are in each project's .output/public directory
pause