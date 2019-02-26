const page = require('./page');

class HomePage extends page {
     getPage() { return browser.page(); }
}

module.exports = new HomePage();