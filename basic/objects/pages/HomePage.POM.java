package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class GoogleHome {
    WebDriver driver;
    By searchPage = By.name("q");

    public GoogleHome(WebDriver driver) { 
      this.driver = driver;
    }
  
    public void sendEmptySearch(String searchEmptySearch) {
      driver.findElement(searchPage).sendKeys("");
    }    

}