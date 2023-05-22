$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/SwagFeatures/AddToCart.feature");
formatter.feature({
  "name": "This feature will be used to validate the product addef to cart in SwagLabs Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the swag application",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_have_launched_the_swag_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_clicked_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the products in cart using examples",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "I clicked on Product name as \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_clicked_on_Product_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Product detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_land_on_Product_detail_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_clicked_on_add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Navigate to cart Page",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_Navigate_to_cart_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Product present in cart Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.verify_Product_present_in_cart_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/SwagFeatures/swaglogin.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionality of SwagLabs Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the swag application",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_have_launched_the_swag_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login success scenario with parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_clicked_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "12345",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the swag application",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_have_launched_the_swag_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_clicked_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the swag application",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_have_launched_the_swag_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_clicked_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagStepDefinition.SwagLoginSteDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});