@echo off
cd basic
start java -Dwebdriver.chrome.driver=%CD%\node_modules\.bin\chromedriver.exe ^
-Dwebdriver.gecko.driver=%CD%\node_modules\.bin\geckodriver.exe ^
-jar \temp\selenium-server-standalone-3.141.59.jar
