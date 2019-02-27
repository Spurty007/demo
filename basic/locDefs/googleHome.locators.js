class googlePageLocators {

    constructor() {
        this.aboutBtn = '#hptl > a:nth-child(1)';
        this.store ='//*[@id="hptl"]/a[2]';
        this.searchForm ='#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input';
        this.searchBtn ='#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(1)';
    }

}
module.exports = googlePageLocators;