const {test,expect} = require('@playwright/test');


test('dynamically find product', async ({page}) => {

    let website = "https://rahulshettyacademy.com/client/";
    let inputEmail = page.locator("#userEmail");
    let inputPassword = page.locator("#userPassword");
    let userEmail = "atulp441@gmail.com";
    let userPassword = "Atul@123";
    let loginbtn = page.locator("#login")
    const productName = "IPHONE 13 PRO";

    // Goto the website.
    await page.goto(website);

    //fill all login info
    await inputEmail.fill(userEmail);
    await inputPassword.fill(userPassword);
    await loginbtn.click();
    await page.waitForLoadState('networkidle');

    // store the product details
    const products = page.locator(".card-body");

    let count = await products.count();
    await console.log(count);

    // find the expected product and add to card
    for( let i = 0; i < count; ++i){
        console.log("in for loop")
        if(await products.nth(i).locator("b").textContent() === productName) {
            console.log("in if cond")
            await products.nth(i).locator("text = Add To Cart").click();
            break;
        }


    }
});

test('@Webst Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "atulp441@gmail.com";
    const productName = 'IPHONE 13 PRO';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Atul@123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
       if (await products.nth(i).locator("b").textContent() === productName) {
          //add to cart
          await products.nth(i).locator("text= Add To Cart").click();
          break;
       }
    }
});
