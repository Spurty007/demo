var URL='https://google.com';
const assert = require('assert');

describe('#000 TESTS', function()
{
  browser.ignoreSynchronization = true;   
  it('#000-01 Navigate to http://google.com', function()
  {
    browser.url(URL);    
    var youAreHere = browser.getUrl().then(function(promised)
    {
      assert.equal(promised, 'https://www.google.com/');
      return promised;      
    })   
  });
});
