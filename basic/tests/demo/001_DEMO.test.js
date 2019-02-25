var URL='https://google.com';
const assert = require('assert');

describe('#001 TESTS', function()
{
  browser.ignoreSynchronization = true;  
  it('#001-01 Check title = "Google"', function()
  {
    browser.url(URL);  
    var GetTitle = browser.getTitle().then(function(promised)
    {  
      assert.equal(promised, 'Google');
      return promised;
    })
  });
});
