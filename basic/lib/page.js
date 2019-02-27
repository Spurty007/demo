class page {

    open(path='') {
        var url = path;
        return browser.url(url);
    }
}


module.exports = page;
