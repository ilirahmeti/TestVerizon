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
  "duration": 6862427697,
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
  "duration": 259349033,
  "status": "passed"
});
formatter.match({
  "location": "Apple.clickOnPhoneLink()"
});
formatter.result({
  "duration": 3021947035,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iclickOnApple()"
});
formatter.result({
  "duration": 3428984878,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iClickOnSpaceGrayButton()"
});
formatter.result({
  "duration": 164808683,
  "status": "passed"
});
formatter.match({
  "location": "Apple.iClickOnAddToCart()"
});
formatter.result({
  "duration": 241587860,
  "status": "passed"
});
formatter.after({
  "duration": 99620078,
  "status": "passed"
});
});