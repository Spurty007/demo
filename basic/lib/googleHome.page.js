//const page = require('./page');
let BasePage = require( './page' );
let HomePageLocators =  require('../locDefs/googleHome.locators');

class HomePage extends BasePage {

    get map() {return new HomePageLocators();};

    getPage(url) {
         return this.open(url); }
}

module.exports = HomePage;