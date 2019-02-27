var URL='https://google.com';
const assert = require('assert');

let HomePage=require('../../uiServ/googleHomepage.uiService');
let homepage=new HomePage();

describe('#000 TESTS', function() {
  browser.ignoreSynchronization = true;   
  it('#000-01 Navigate to http://google.com', function() {
      homepage.getPage(URL);
      assert.equal(browser.getTitle(), 'Google');
      homepage.search('Adrian Lewis Darts player');
  });
});
