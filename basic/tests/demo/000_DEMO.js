var URL='http://google.com';
const assert = require('assert');
const { remote } = require('webdriverio')

describe('#001 TESTS', function(){

  it('#001-01 Navigate to http://google.com', function()
  {
    console.log('#001-01 Got to Google.com');
    browser.url(URL);
  });

  it('#001-02 Grab title', function()
  {
    var GetTitle = browser.getTitle().then(function(promisedResult)
    {
      console.log("#001-02a Assert title is 'Google' ");
      assert.equal(promisedResult, 'Google');
      return promisedResult;
    })
    
  });

});
