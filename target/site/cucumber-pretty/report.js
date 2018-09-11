$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("apple.feature");
formatter.feature({
  "line": 4,
  "name": "Phone Selection",
  "description": "",
  "id": "phone-selection",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@apple"
    }
  ]
});
formatter.before({
  "duration": 6182613650,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Apple select",
  "description": "",
  "id": "phone-selection;apple-select",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Phones link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Apple",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Space Gray button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Apple.iAmONHomePage()"
});
formatter.result({
  "duration": 303759335,
  "status": "passed"
});
formatter.match({
  "location": "Apple.clickOnPhoneLink()"
});
formatter.result({
  "duration": 5120239483,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iclickOnApple()"
});
formatter.result({
  "duration": 1491320677,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iClickOnSpaceGrayButton()"
});
formatter.result({
  "duration": 381506928,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iClickOnAddToCart()"
});
formatter.result({
  "duration": 632720322,
  "status": "passed"
});
formatter.after({
  "duration": 114254121,
  "status": "passed"
});
});