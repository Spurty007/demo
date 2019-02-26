var URL='https://google.com';
const assert = require('assert');

describe("#005 Page Object Model",function() {
  browser.ignoreSynchronization = true; 
  it("#005-01 Changing Window size (UP)",function() {
    browser.url(URL);      
    browser.maximizeWindow();
  });
});