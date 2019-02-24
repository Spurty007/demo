import Page from './Page';

class Search extends Page {
    open() {
        super.open(`search`);
        return this;
    }

    search("") {
        this.searchValue.addValue("");
        this.submit.click();
        return this;
    }

    get submit() { return $(`[type="submit"]`); }
}

export default new Search();