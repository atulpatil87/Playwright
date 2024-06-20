const {test,expect} = require('@playwright/test');

test('perform the actions',async ({page})=>{

    // store the staging url in a variable
    let  mentrStagingUrl= "https://staging.mentr-me.com/";  // await is not require here, await is only required when we perform the actions. 

    // go to the page.
    await page.goto(mentrStagingUrl);

    // we can store the locator as well and use.
     const LogIn = page.locator("//button[@type='submit']");
    
    // click action
        // click on Email using locator
        await page.click('text=Email')
        // Fill the email input box.
        await page.locator("#loginEmail").fill("atul.p@mim-essay.com");

        // Fill the password 
        await page.locator("#loginPassword").fill("Atul@123");

        // click on sign in using locator. 
        await LogIn.click()
    


});