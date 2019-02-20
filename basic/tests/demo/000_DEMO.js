var URL='http://google.com';
const assert = require('assert');
 
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

  it('#001-03 Search on Google', function()
  {
    /*
      How do we locate the search button and pass it a Mouse click?       
      Used to just  `browser.click("name=q");`
      But that fails with 'TypeError: browser.click is not a function'     
    */
  });

});
