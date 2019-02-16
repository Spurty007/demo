console.log('#000 TEST GOOGLE EXISTS');
var URL='https://google.com';
describe('#000 TEST GOOGLE Home page', function()
{

  it('#000_1 TEST PAGE EXISTS', function()
  {
    console.log('#000_1a TESTING GOOGLE.COM can be reached by ');
    browser.url(URL);
  });

  it('#000_2 TEST PAGE EXISTS', function()
  {
    var GetTitle = browser.getTitle().then(function(promisedResult)
    {
      console.log("Title is : " + promisedResult);
      return promisedResult;
    })
  });

});
