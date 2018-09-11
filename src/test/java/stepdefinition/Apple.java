package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.HomePage;
import framework.PhonePage;
import org.testng.Assert;

public class Apple {

    HomePage homePage = new HomePage();
    PhonePage phonePage = new PhonePage();




     @Given("^I am on home page$")
     public void iAmONHomePage(){
        
         Assert.assertEquals(homePage.getHomePageVerification(), "Phones", "U ARE NOT IN THE HOME PAGE");

     }


    @When("^I click on Phones link$")
    public void clickOnPhoneLink(){
        homePage.clickOnPhone();
    }

    @When("^I click on Apple$")
    public void iclickOnApple(){
        phonePage.clickOnAppleIphone();
    }

    @When("^I click on Space Gray button$")
    public void iClickOnSpaceGrayButton(){
        phonePage.clickOnSpaceGray();
    }

    @When("^I click on add to cart$")
    public void iClickOnAddToCart(){
        phonePage.clickOnAddToCart();
    }

//    @Then("^I verify the Phone is Selected$")
//    public void iVerifyPhoneIsSelected(){
//        Assert.assertEquals(phonePage.getConfirmationLocation(), "Confirm Location");
//    }




}
