var URL='https://google.com';
const assert = require('assert');

describe("#004 Page Object Model",function() {
  browser.ignoreSynchronization = true; 
  it("#004-01 click operation",function() {
    browser.url(URL);  
    browser.navigateTo("https://google.com");
  });  
});