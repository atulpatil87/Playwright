const {test,expect} = require('@playwright/test')

test('If Element is Hidden', async ({page})=>{

    // Navigate to the website
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // input box locator
    const inputBox = page.locator('#displayed-text');

     // Click on the "Hide" element
     await page.locator("#hide-textbox").click();

     // Verify the input box is hidden
    await expect(inputBox).toBeHidden();

    // Click on the "show" element
    await page.locator("#show-textbox").click();

    // Verify the input box is hidden
    await expect(inputBox).toBeVisible();






});