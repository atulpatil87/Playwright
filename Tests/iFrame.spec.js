const {test,expect} = require('@playwright/test')

test('Handle Iframe', async ({page}) => {

    // Navigate to a webpage.
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Switch to the iframe
    const iframe1 = page.frameLocator('#courses-iframe');
    await iframe1.locator("li a[href*='lifetime-access']:visible").click();

});