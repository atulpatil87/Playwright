const {test,expect} = require('@playwright/test')

test ('to have class', async ({page}) =>
{

// Go To the website
await page.goto("https://rahulshettyacademy.com/loginpagePractise");

// Store the locator
const documentlink = page.locator("[href*='documents-request']");

// Verify the class is applied.
await expect(documentlink).toContainText("class","blinkingText");

});