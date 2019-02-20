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

  it('#001-03 Stay on Google.com', function()
  {   
    var GetTitle = browser.getTitle().then(function(promisedResult)
    {
      console.log("#001-03 Title should still be 'Google' ");
      assert.equal(promisedResult, 'Google');
      return promisedResult;
    })
  });

  it('#001-04 Search Google.com', function()
  {   
    console.log("#001-04a Locate id='q'");
    console.log("#001-04b Submit click() on this element");
    console.log("#001-04c report something maybe?");  
  });

});
