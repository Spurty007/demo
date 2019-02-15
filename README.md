# Demo code 
Selenium stand up and test 

## Common needs
The following commands make no assumptions of your OS. They assume you have `git` and `npm` installed and these tools are in your PATH

   * `git clone https://github.com/Spurty007/demo.git`

## Windows:

Assumptions: 
   * `selenium-server-standalone-3.141.59.jar` is sitting in \temp

```
cd demo\basic
npm install
cd ..
Win.StartSelenium.bat
node_modules\.bin\wdio config\wdio.conf.js

```

## Unix:

Assumptions: 
   * `selenium-server-standalone-3.141.59.jar` is sitting in /tmp

```
cd demo/basic
npm install
wdio config/Unix.wdio.conf.js
```

##