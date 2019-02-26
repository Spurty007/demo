var URL='https://google.com';
const assert = require('assert');

describe("#008 Page Object Model",function() {
  browser.ignoreSynchronization = true; 
  it('#008-1 should demonstrate the click command', function() {
      browser.url("https://google.com");  
/*
    var doSearch = browser.findElement('//*[@id="tsf"]/div[2]/div/div[1]/div/div[1]/input').then(function(promised)
    {  
      assert.equal(promised, 'Google');
      promised.click();
      return promised;
    })
*/    
  });
});
