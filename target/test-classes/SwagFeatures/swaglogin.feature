@Browser
Feature: This feature will be used to test the login functionality of SwagLabs Application

  Background: 
    Given I have launched the swag application
    Then I should land on home page

  Scenario: Validate the Login success scenario with parameter
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I clicked on login button
    Then I should land on dashboard page

  Scenario Outline: Validate the Login failure scenario using examples
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And I clicked on login button
    Then I should get the error message as "<Error>"

    Examples: 
      | UserName        | Password     | Error                                                                     |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.	                     |
