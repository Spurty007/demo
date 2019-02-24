var URL='http://google.com';
const assert = require('assert');
const url = require('url');

describe('#001 TESTS', function(){

  it('#001-01 Navigate to http://google.com', function()
  {
    browser.url(URL);
    
  });

  it('#001-02 Check title = "Google"', function()
  {
    var GetTitle = browser.getTitle().then(function(promisedResult)
    {
      assert.equal(promisedResult, 'Google');
      return promisedResult;
    })
  });

  it('#001-03 Check title != "CHEESE"', function()
  {
    var GetTitle = browser.getTitle().then(function(promisedResult)
    {
      assert.notEqual(promisedResult, 'CHEESE');
      return promisedResult;
    })
  });

  it('#001-04 Search on Google', function()
  {
     /*
      We've opened the URL, so now we need to access the browser object
      
      But, how? No examples outside of that GetTitle one
     
     */
     var url = new url("https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username");
     var user = url.username; // Returns:'anonymous'
     
  });
});
