// This file is created for getby methods.

const {test,expect} = require('@playwright/test')

test('getby',async ({page})=>{
    const website = "https://rahulshettyacademy.com/angularpractice/";
    await page.goto(website);

    // use of getByLable label
    // here for checkbox
    await page.getByLabel("Check me out if you Love IceCreams!").click();

    // here for radio btn
    await page.getByLabel("Employed").check(); // you can use click() method also

    // here for dropdown.
    await page.getByLabel("Gender").selectOption("Male");

    // use of getByPlaceholder
    // here for password
    await page.getByPlaceholder("Password").fill("atul123");

    // use of getByRole. --- Imp <<
    // here for button.
    await page.getByRole("button", {name: 'Submit'}).click();

    // use of getByText
    await page.getByText("The Form has been submitted successfully!").isVisible();

    // for the add to the card
    // await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});

