//import Page from './page'
const Page = require('./page');

class DynamicPage extends Page {
    get btnStart () { return $('button=Start') }
    get loadedPage () { return $('#finish') }
    get searchArea () { return $('name=q') }
} module.export default new DynamicPage()