package framework;

import org.openqa.selenium.By;
import stepdefinition.SharedSD;
import util.ConfigReader;

public class BasePage extends SharedSD {


    public void click(By locator){
        getDriver().findElement(locator).click();

    }


    public void sendKeys(By locator, String text){
        getDriver().findElement(locator).sendKeys(text);
    }


    public String getTextValue(By locator){
        return  getDriver().findElement(locator).getText();
    }




}
