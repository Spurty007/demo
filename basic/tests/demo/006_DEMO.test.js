var URL='https://www.google.com';
const assert = require('assert');

describe("#006 Page Object Model",function() {
  browser.ignoreSynchronization = true; 
  it("#006-1 Find Element",function() {
    browser.url(URL);      
  });
});
