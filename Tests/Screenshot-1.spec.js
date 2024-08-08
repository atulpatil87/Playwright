const {test,expect} = require('@playwright/test')

test('screenshot', async ({page})=>{

    // Navigate to the website
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // for partial screenshot
    await page.locator("#displayed-text").screenshot({path: 'partial_screenshot.png'}) // this is also take partial screenshot

    // input box locator
    const inputBox = page.locator('#displayed-text');

     // Click on the "Hide" element
     await page.locator("#hide-textbox").click();

     // take screenshot here
     await page.screenshot({path: 'hidden_element.png'}); // this is take full screenshot
     
     // Take partial screenshot here
     // await page.screenshot({path: 'partial_screenshot.png', fullPage: false}); // this is take partial screenshot -- not working now.

     // Verify the input box is hidden
    await expect(inputBox).toBeHidden();

    // Click on the "show" element
    await page.locator("#show-textbox").click();

    // Verify the input box is hidden
    await expect(inputBox).toBeVisible();






});