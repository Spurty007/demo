# Demo code 
Selenium stand up and test 

## Common needs
The following commands make no assumptions of your OS. They assume you have `git` and `npm` installed and these tools are in your PATH

   * In a clean directory, you have run `git clone https://github.com/Spurty007/demo.git`

After this you stay in the current working directory to continue (as per your OS).

## Windows:

Assumptions: 
   * Visit https://www.seleniumhq.org/download/ 
   * Click Download link
   * Place `selenium-server-standalone-3.141.59.jar` in \temp

```
cd demo\basic
npm install
cd ..
Win.StartSelenium.bat
node_modules\.bin\wdio config\wdio.conf.js

```

## Unix:

Assumptions: 
   * Visit https://www.seleniumhq.org/download/ 
   * Click Download link
   * Place `selenium-server-standalone-3.141.59.jar` in /tmp

```
cd demo/basic
npm install
cd .
#Unix.StartSelenium.sh // TBD
wdio config/wdio.conf.js
```

##
