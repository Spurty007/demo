//import { browser, element, by } from 'protractor' ;
import * from 'protractor';
export class GooglePO {
    public static searchBar = element(by.name("q"))
    public static googleSearch = element(by.name("btnK"))
    feelingLucky(){  return element(by.name("btnI")) }
}
