const {test,except} = require('@playwright/test');
const { promises } = require('dns');

// here we user "browser" instead of "page". bcz we need to create new page instance for the handle another window.
test('@handle child window',async ({browser}) => {

    // We need to define context first
    const context = await browser.newContext();

    // new page define
    const page = await context.newPage();

    // Go To the website
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");

    // Store the locator
    const documentlink = page.locator("[href*='documents-request']");

    // if i click on the link then it open in new tab.
    // we need to define context first

    // we user promise.all for execute the steps at a time and it still waiting when all the steps are executed successfully.
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentlink.click(),
])

    // print new page url.
    console.log(newPage.url());
});




test('new page',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    var website = "https://rahulshettyacademy.com/loginpagePractise";
    
    await page.goto(website);

    const hyperLink = page.locator(".blinkingText");

    const [newPage2] = await Promise.all([
        context.waitForEvent('page'),
        hyperLink.click(),
    ])

    // now we can use the "newPage2" variable for new tab/window [user newpage2. for any action for new upcoming window]

    // Print the URL.
    console.log(await newPage2.url());

    const redText = newPage2.locator('.red');

    // note: if the locator is not appear then we can use " await redText.waitfor();"
    
    // Print the red text.
    console.log(await redText.innerText());

});









































