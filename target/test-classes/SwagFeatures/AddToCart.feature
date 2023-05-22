Feature: This feature will be used to validate the product addef to cart in SwagLabs Application

  Background: 
    Given I have launched the swag application
    Then I should land on home page
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I clicked on login button
    Then I should land on dashboard page

  Scenario: Validate the products in cart using examples
   When I clicked on Product name as "Sauce Labs Backpack"
   Then I should land on Product detail page
    And I clicked on add to cart button
    And I Navigate to cart Page
    Then Verify Product present in cart Page
