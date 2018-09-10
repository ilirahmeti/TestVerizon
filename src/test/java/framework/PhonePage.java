package framework;

import org.openqa.selenium.By;

public class PhonePage extends BasePage {

    private By appleIPhone = By.xpath(" //div[@id='tile_dev8720300']//div[@class='tile-content']//div//div[@class='NHaasTX75Bd']");
    private By spaceGray = By.xpath("//div[@class='colorStyleDiv height25 width25 positionRelative borderRadius50 cursorPointer border_97']");
    private By addToCart = By.xpath("//button[@class='addToCartBtn']");
    private By confirmationLocation = By.xpath("//button[@type='submit']");


    public void clickOnAppleIphone(){
        click(appleIPhone);
    }

    public void clickOnSpaceGray(){
        click(spaceGray);
    }

    public void clickOnAddToCart(){
        click(addToCart);
    }


//    public String getConfirmationLocation(){
//        return getConfirmationLocation();
//    }




}
