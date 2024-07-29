const {test,expect} = require('@playwright/test')


test('Handle Alert Box', async ({page})=>{

    // Navigate to a webpage.
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // create a alert.
    //await page.locator('#alertbtn').click();

    // click in the OK btn : positive and negative senario represent.
    page.on('dialog',dialog => dialog.accept());

    //  create alert. -- the accept btn can be clickable for this alert popup as well. no need to specify the script after the alert click action.
    await page.locator('confirmbtn').click();
});