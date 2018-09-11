package framework;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import stepdefinition.SharedSD;
import util.ConfigReader;

import java.util.concurrent.TimeUnit;
import java.util.function.Function;

public class BasePage extends SharedSD {


    public void click(By locator){
       browser(locator).click();

    }


    public void sendKeys(By locator, String text){
        browser(locator).sendKeys(text);
    }


    public String getTextValue(By locator){
        return  browser(locator).getText();
    }


    public static WebElement browser(final By locator){
        Wait<WebDriver> wait = new FluentWait<>(getDriver())
                .withTimeout(30,TimeUnit.SECONDS)
                .pollingEvery(1,TimeUnit.SECONDS)
                .ignoring(NoSuchElementException.class)
                .ignoring(StaleElementReferenceException.class)
                .ignoring(ElementNotFoundException.class)
                .withMessage("Webdriver waited for 30 seconds but still could not find the element" +
                        " therefore Timeout Exception has been thrown");

        WebElement element = wait.until(new Function<WebDriver, WebElement>() {
            @Override
            public WebElement apply(WebDriver driver) {
                return driver.findElement(locator);
            }
        });
        return element;
    }


}
