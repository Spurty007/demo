var URL='https://google.com';
const assert = require('assert');

describe('#002 TESTS', function()
{
  browser.ignoreSynchronization = true;  
  it('#002-01 Check title != "CHEESE"', function()
  {
    browser.url(URL);  
    var GetTitle = browser.getTitle().then(function(promised)
    {
      assert.notEqual(promised, 'CHEESE');
      return promised;
    })
  });
});
