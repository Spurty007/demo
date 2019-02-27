let Homepage= require('../lib/googleHome.page');

class HomePageService extends Homepage {
    search(Search='') {
        browser.setValue(this.map.searchForm,Search);
        browser.click(this.map.searchBtn);
    }

}
module.exports = HomePageService;
