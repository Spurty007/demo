var URL='https://google.com';
const assert = require('assert');

describe("#003 Page Object Model in Protractor",function()
{
  browser.ignoreSynchronization = true; 
  it("#003-01 Search Google",function()
  {
    browser.url(URL);  
    browser.navigateTo("https://www.google.com/")
    //googleLib.searchGoogle("ADRIAN LEWIS")
  });

});