//import assert from 'assert'
const assert = require('assert');

//import DynamicPage from '../pageobjects/dynamic.page'
const DynamicPage = require('../pageobjects/dynamic.page');

describe('dynamic loading', () => {
    it('should be an button on the page', () => {
        DynamicPage.open()
        assert.equal(DynamicPage.loadedPage.isExisting(), false)

        DynamicPage.searchArea.click()
        DynamicPage.loadedPage.waitForExist()
        assert.equal(DynamicPage.loadedPage.isExisting(), true)
    })
})