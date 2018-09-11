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
  "duration": 5681886439,
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
  "duration": 843516487,
  "status": "passed"
});
formatter.match({
  "location": "Apple.clickOnPhoneLink()"
});
formatter.result({
  "duration": 4845394558,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iclickOnApple()"
});
formatter.result({
  "duration": 3384466347,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iClickOnSpaceGrayButton()"
});
formatter.result({
  "duration": 168337276,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iClickOnAddToCart()"
});
formatter.result({
  "duration": 175387981,
  "status": "passed"
});
formatter.after({
  "duration": 102997732,
  "status": "passed"
});
});