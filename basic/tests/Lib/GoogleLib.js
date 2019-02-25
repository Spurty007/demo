import { browser } from 'protractor';
//import { GoogleLib } from '../Lib/GoogleLib';
//import { GooglePO } from '../PO/GooglePO';

import { GooglePO } from '../PO/GooglePO';
export class GoogleLib{
    searchGoogle(searchTerm :string){
        GooglePO.searchBar.sendKeys(searchTerm)
        GooglePO.searchButton.click()
    }
}