
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

test.only("Extract the school names", async ({page}) =>{
    await page.goto(mentrStagingUrl)
})