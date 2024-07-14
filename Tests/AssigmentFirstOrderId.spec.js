// Assignment> add 10 items in card find 1 item adn delete it.

const {test,except} = require('@playwright/test');


test ('Assignment 1 remove the 1 item from the card', async ({page}) => {

    // Go to the page.
    await page.goto("https://rahulshettyacademy.com/client")

    // login your account
    await page.locator("#userEmail").fill("atulp441@gmail.com");
    await page.locator("#userPassword").fill("Atul@123");
    await page.locator("#login").click();

    // adding wait until network calls
    await page.waitForLoadState("networkidle");
    
    // find the item.
    const products = await page.locator(".card-body");
    const count = await products.count();
    console.log("Count: "+count)

    // find the "ADIDAS ORIGINAL" item
    for(let i=0; i<count;++i) {
        console.log("For loop started")
        if(await products.nth(i).locator("b").textContent() ==="ADIDAS ORIGINAL"){
          await products.nth(i).locator("text= Add To Cart").click();

            // const AddToCard = await products.nth(i).locator("text= Add To Cart");
            // AddToCard.click();

            // add  10 items in card :::::: but the 10 item is not showing in the card.
            // let w = 0;
            // for(w;w<10;w++){
            //     await AddToCard.click();
            //     console.log("Added to the card: "+w)
            // }
        }
    }

        // Click on the cart cta
        await page.locator("//button[@routerlink='/dashboard/cart']").click();

        // Save the Order id
        const OrderId = await page.locator(".itemNumber").textContent();
        console.log(OrderId);

        // click on the checkout cta
        await page.locator("text = Checkout").click();

        // Verify the email is correct in lable.
        const MyEmail = "atulp441@gmail.com";
        const EmailLable = await page.locator("//label[@type='text']");
        await except(EmailLable).toContainText(MyEmail);

});
// sort the getby method.