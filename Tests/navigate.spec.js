const {test} = require('@playwright/test')

test("Navigation", async ({page})=>{
    
    // Goto
    await page.goto("https://google.com");

    //goto
    await page.goto("https://mentr-me.com")

    // navigate back
    await page.goBack();

    // Navigate Forward
    await page.goForward();

});