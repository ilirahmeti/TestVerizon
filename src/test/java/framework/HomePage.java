package framework;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class HomePage extends BasePage {



private By phones = By.xpath("//a[@href='https://www.verizonwireless.com/smartphones/'][contains(text(),'Phones')]");
private By homePageVerification = By.xpath("//a[@href='https://www.verizonwireless.com/smartphones/'][contains(text(),'Phones')]");


public void clickOnPhone(){
    click(phones);
}

public String getHomePageVerification(){
   return getTextValue(homePageVerification);
}







}
