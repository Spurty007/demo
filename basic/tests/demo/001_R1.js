console.log('#001 TEST GOOGLE SEARCH');
var URL='https://google.com';

describe('#001 TEST FIND GOOGLE', function(){
  it('#001_1 BY GLOBAL VAR', function()
  {
    browser.url(URL);   
  });  

  it('#001_2 BY LOCAL VAR', function()
  {
    var lURL='https://google.com';
    browser.url(lURL);   
  });  

});
