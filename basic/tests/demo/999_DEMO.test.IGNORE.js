var URL='https://google.com';
const assert = require('assert');

describe("#999 Close windows",function() {
  browser.ignoreSynchronization = false;
  it("#999 shutting up shop",function() {
    browser.url(URL);
    browser.closeWindow();
  });
});