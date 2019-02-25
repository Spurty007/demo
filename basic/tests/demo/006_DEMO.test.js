var URL='https://google.com';
const assert = require('assert');

describe("#006 Page Object Model",function()
{
  browser.ignoreSynchronization = true; 
  it("#006-1 Find Element",function()
  {
    browser.url(URL);      
    browser.navigateTo('https://www.google.com/')
    /*
    var RS = browser.findElements('css selector','#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input').then(function(promised)
    {
      console.log('#007-04 2) I found ' + promised);
      assert.equal(promised, 'https://www.google.com');
      return promised;
    })
    */
  });
});