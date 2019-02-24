public class GoogleHomePage {
  
    WebDriver driver;
    By searchPage = By.name("q");

  public GoogleHomePage(WebDriver driver) { 
    this.driver = driver;
  }
  
  public void sendEmptySearch(String searchEmptySearch) {
    driver.findElement(searchPage).sendKeys(searchEmptySearch);
  }
}