@ECHO OFF
FOR /f "tokens=2 delims==" %%a IN ('wmic OS Get localdatetime /value') DO SET "dt=%%a"
SET "YY=%dt:~2,2%" & SET "YYYY=%dt:~0,4%" & SET "MM=%dt:~4,2%" & SET "DD=%dt:~6,2%"
SET "HH=%dt:~8,2%" & SET "Min=%dt:~10,2%" & SET "Sec=%dt:~12,2%"
SET "fullstamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%"

CD basic

START java -Dwebdriver.chrome.driver=C:\apps\nodejs\drivers\chromedriver.exe ^
-Dwebdriver.gecko.driver=C:\apps\nodejs\drivers\geckodriver.exe ^
-jar \temp\selenium-server-standalone-3.141.59.jar -log %TMP%\selenium-%fullstamp%.log
ECHO logging to %TMP%\selenium-%fullstamp%.log
