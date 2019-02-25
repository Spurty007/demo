var URL='https://google.com';
const assert = require('assert');

describe("#005 Page Object Model in Protractor",function()
{
  browser.ignoreSynchronization = true; 
  it("#005-01 Changing Window size (UP)",function()
  {
    browser.url(URL);      
    browser.maximizeWindow()
  });
});