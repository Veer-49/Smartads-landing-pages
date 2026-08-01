@echo off
echo Installing dependencies for all SmartAds Landing Pages...
echo.

echo Installing dependencies for Cinema Spotlight...
cd cinema-spotlight-main
call npm install
cd ..

echo.
echo Installing dependencies for Magazine Mastery...
cd magazine-mastery-main
call npm install
cd ..

echo.
echo Installing dependencies for Newsy Lead Forge...
cd newsy-lead-forge-main
call npm install
cd ..

echo.
echo Installing dependencies for OTT Ad Hub...
cd ott-ad-hub-main
call npm install
cd ..

echo.
echo Installing dependencies for Radio Connect Hub...
cd radio-connect-hub-main
call npm install
cd ..

echo.
echo Installing dependencies for Sky High Ads...
cd sky-high-ads-main
call npm install
cd ..

echo.
echo Installing dependencies for Sky High Reach...
cd sky-high-reach-main
call npm install
cd ..

echo.
echo All dependencies installed successfully!
pause