const {test,except} = require("@playwright/test");
//const {LoginPage} = require("../pageobjects/LoginPage");
//const {LoginPage} = import("../pageobjects/LoginPage");
import LoginPage from "../pageobjects/LoginPage";

test("page object created and action method for end to end script", async ({page}) => {

    const Email = "Atul1@mim-essay.com";
    const Password = "123456";
    
    // go to the login page
    await page.goto("https://staging.mim-essay.com/login");

    // Click on the email btn.
    await page.locator(".emailLoginOption").click();
    
    // Create an instance of LoginPage class.
    const loginPage = new LoginPage(page);
    loginPage.validLogin(Email,Password);

    // Enter the Email.
    //await page.getByPlaceholder("Email Address").fill("Atul1@mim-essay.com")

    // Enter the password.
    //await page.getByPlaceholder("Password").fill("123456")

    // click on the "Access Free Resources" btn.
    //await page.getByText("Access Free Resources").click();

    // adding wait until network calls
    await page.waitForLoadState("networkidle");

    // Verify the User logged in successfully.
    await page.locator(".desktop-login").isVisible();                             
});