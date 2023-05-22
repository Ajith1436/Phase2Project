package SwagStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SwagLoginSteDefs {
	WebDriver driver = Hooks.driver;

	@Given("I have launched the swag application")
	public void i_have_launched_the_swag_application() {
		driver.get("https://www.saucedemo.com/");
	}

	@Then("I should land on home page")
	public void i_should_land_on_home_page() {
		WebElement HomePagetilte = driver.findElement(By.xpath("//div[@class='login_logo']"));
		String Actualtitle = HomePagetilte.getText();
		String Exptitle = "Swag Labs";
		Assert.assertEquals(Actualtitle, Exptitle);
	}

	@When("I enter username as {string}")
	public void i_enter_username_as(String UserNameVal) {
		WebElement UserNameTxt = driver.findElement(By.id("user-name"));
		UserNameTxt.sendKeys(UserNameVal);
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String PasswordVal) {
		WebElement PasswordTxt = driver.findElement(By.id("password"));
		PasswordTxt.sendKeys(PasswordVal);
	}

	@When("I clicked on login button")
	public void i_clicked_on_login_button() throws InterruptedException {
		WebElement LoginBtn = driver.findElement(By.id("login-button"));
		LoginBtn.click();
		Thread.sleep(3000);
	}

	@Then("I should land on dashboard page")
	public void i_should_land_on_dashboard_page() {
		WebElement title = driver.findElement(By.xpath("//span[@class='title']"));
		String ActualText = title.getText();
		String ExpText = "Products";
		Assert.assertEquals(ActualText, ExpText);
	}

	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String ExpError) {
		WebElement lockedUserError = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActualError = lockedUserError.getText();
		// String ExpError = "Epic sadface: Sorry, this user has been locked out.";
		Assert.assertEquals(ActualError, ExpError);
	}

	@When("I clicked on Product name as {string}")
	public void i_clicked_on_Product_name_as(String string) {
		WebElement Product1 = driver.findElement(By.xpath("//div[contains(text(), \"Sauce Labs Backpack\") ]"));
		Product1.click();
		
	}

	@Then("I should land on Product detail page")
	public void i_should_land_on_Product_detail_page() {
		WebElement PDPpagename = driver.findElement(By.xpath("//div[@class='inventory_details_name large_size']"));
		String PDPpage= PDPpagename.getText();
		String ExpPDPpage ="Sauce Labs Backpack";
		Assert.assertEquals(ExpPDPpage,PDPpage );
	}

	@Then("I clicked on add to cart button")
	public void i_clicked_on_add_to_cart_button() {
		WebElement addtoCartBtn = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
		addtoCartBtn.click();
	}

	@Then("I Navigate to cart Page")
	public void i_Navigate_to_cart_Page() throws InterruptedException {
		WebElement cart_link = driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
		cart_link.click();
		Thread.sleep(2000);
	}

	@Then("Verify Product present in cart Page")
	public void verify_Product_present_in_cart_Page() {
		WebElement cartProductname = driver.findElement(By.xpath("//div[@class='inventory_item_name']"));
		String CartProduct= cartProductname.getText();
		String ExpCartProduct ="Sauce Labs Backpack";
		Assert.assertEquals(ExpCartProduct,CartProduct );
	}

}
