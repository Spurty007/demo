class Page {
    open(path) {
        browser.url(path);
        return this;
    }
}

export default Page;