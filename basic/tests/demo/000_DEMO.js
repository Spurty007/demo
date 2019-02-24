var URL='https://google.com/ncr';
const assert = require('assert');

describe('#001 TESTS', function(){
  it('#001-01 Navigate to http://google.com', function()
  {
    browser.url(URL);    
  });

  it('#001-02 Check title = "Google"', function()
  {
    var GetTitle = browser.getTitle().then(function(promised)
    {
      assert.equal(promised, 'Google');
      return promised;
    })
  });

  it('#001-03 Check title != "CHEESE"', function()
  {
    var GetTitle = browser.getTitle().then(function(promised)
    {
      assert.notEqual(promised, 'CHEESE');
      return promised;
    })
  });

});
