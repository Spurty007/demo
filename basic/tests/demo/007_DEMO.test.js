var URL='https://google.com';
const assert = require('assert');

describe("#007 Page Object Model in Protractor",function()
{
  browser.ignoreSynchronization = true; 
  it("#007-01 Find Element",function()
  {
    browser.url("https://google.com")
    var youAreHere = browser.getUrl().then(function(promised)
    {
      assert.equal(promised, 'https://www.google.com/');
      return promised;      
    })   
  });
});