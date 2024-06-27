
import {test,expect} from '@playwright/test';

let mentrStagingUrl= "https://staging.mentr-me.com/";


/* if Id is present
    css -> tagname#id OR #id

    If class attribute is present
    css -> tagname.class OR .class

    Write css based on any Attribute
    css -> [attribute='value]
    
    Write css with traversing from Parent to Child.
    css -> Parenttagname >> childtagname

    If needs to write the locator based on text
    text=''    */


test ('locator',async ({page})=> {
    
    // store the staging url in a variable
    // let mentrStagingUrl= "https://staging.mentr-me.com/";


    // go to the page.
    await page.goto(mentrStagingUrl);

    // click on the login locator by using text
    await page.click('text=Login')

    // click on Email using locator
    await page.click('text=Email')
    // Fill the email input box.
    await page.locator("#loginEmail").fill("atul.p@mim-essay.com");

    // Fill the password 
    await page.locator("#loginPassword").fill("Atul@123");

    // click on sign in using locator
    await page.click("//button[@type='submit']")

    // click on avatar logo using locator
    //await page.click("//div[@data-cy='avatar']")

    // click on container using locator
    //await page.click("//div[@post-'option-container']")

    // page.locator("[style*='block']") --- here * represent the matching the valute "block", in case if there style value is "block modal value2" then also it find the element.

    // Extract the text from the modal
    let UserName = await page.textContent("//div[@id='navbarHidden']//div//nav//div//div//div//div//div//div//div//div//p")

    // Print the username in console
    console.log(UserName)

    // Verify the User Name is "Atul Patil"

    await expect(UserName).toContain('Atul'); // here locator is "UserName" we already assign a value like ""//div[@id='navbarHidden']//div//nav//div//div//div//div//div//div//div//div//p"".
    
});

test("Extract the school names", async ({page}) =>{

    // Go to the explore page.
    await page.goto("https://staging.mentr-me.com/explore");

    // for overcome the allTextContents problem we need to use "await page.waitForLoadState('networkidle');" --- it wait until the all network call done.
    await page.waitForLoadState('networkidle');

    // Close the walkthrough 
    await page.click("//button[@title='Close']//*[name()='svg']");

    // OR we can user "first" for only for first element.
    console.log(await page.locator(".school-name").first().textContent());

    // Primt the first 2 schools [we can use nth(<array index>) if multiple element are return]
    console.log(await page.locator(".school-name").nth(1).textContent());
    console.log(await page.locator(".school-name").nth(2).textContent());

    // Extract the all school names. 

    // we can use  waitfor() method for element until appear.
    await page.locator(".school-name").first().waitFor();

    // Note: the allTextContents method is not takes wait [make sure first use a waitForLoadState for page load]
    let schoolNames = await page.locator(".school-name").allTextContents();

    // Print the school names in console.
    console.log(await schoolNames);

    




})