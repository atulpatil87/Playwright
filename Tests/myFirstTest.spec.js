const {test,expect} = require('@playwright/test');

test ('open browser with creating instance',async ({browser})=> {

    // Create new browser instance.
    const context = await browser.newContext();

    // Open new page.
    const page = await context.newPage();

    // go to the page.
    await page.goto('https://www.mentr-me.com');
});

 
test ('open browser without creating instance',async ({page})=> {

    // go to the page.
    await page.goto('https://www.mentr-me.com');

    // get the title
    let title = await page.title();  
    console.log(title);

    // verify title using assertion
    await expect(page).toHaveTitle("MentR-Me");
});

