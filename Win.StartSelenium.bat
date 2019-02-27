@ECHO OFF
REM ***************************************************************************
REM Build a timestamp variable
REM ***************************************************************************
FOR /f "tokens=2 delims==" %%a IN ('wmic OS Get localdatetime /value') DO SET "dt=%%a"
SET "YY=%dt:~2,2%" & SET "YYYY=%dt:~0,4%" & SET "MM=%dt:~4,2%" & SET "DD=%dt:~6,2%"
SET "HH=%dt:~8,2%" & SET "Min=%dt:~10,2%" & SET "Sec=%dt:~12,2%"
SET "fullstamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%"
REM ***************************************************************************
REM Drop down to the next level, setup logs and then start drivers 
REM ***************************************************************************
CD basic
MKDIR logs 2> NUL
START /min "Selenium Server Standalone" java -Dwebdriver.chrome.driver=C:\apps\nodejs\drivers\chromedriver.exe ^
-Dwebdriver.gecko.driver=C:\apps\nodejs\drivers\geckodriver.exe ^
-jar \temp\selenium-server-standalone-3.141.59.jar -log %TMP%\selenium-%fullstamp%.log
REM ***************************************************************************
REM Report where we are logging the standalone server logs
REM ***************************************************************************
ECHO logging to %TMP%\selenium-%fullstamp%.log
