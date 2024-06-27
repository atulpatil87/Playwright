const {test,expect} = require('@playwright/test')

test ('dropdown',async ({page}) =>
    {
        // Go To the website
        await page.goto("https://rahulshettyacademy.com/loginpagePractise");

        // click on the "User" radiobtn
        await page.locator(".radiotextsty").last().click();

        // Clcik on okay btn when popup is appear
        await page.locator("#okayBtn").click();

        // print in console, if the radio btn is selected the it print "true" else false.
        console.log(await page.locator(".radiotextsty").last().isChecked());

        //assertion: check the selected option is to be checked.
        await expect(page.locator(".radiotextsty").last()).toBeChecked
    
        // select option from dropdown
        const dropdown = page.locator("select.form-control");
        await dropdown.selectOption("Teacher");

        // Click on the agree term and condition chechbox
        await page.locator("#terms").click();

        // Verify the checkmark is true (selected)
        expect (await page.locator("#terms")).toBeChecked();

        // Click on the agree term and condition chechbox to uncheck the box
        await page.locator("#terms").uncheck();
        
        // Verify the  checkbox is unselected.
        expect (await page.locator("#terms").isChecked()).toBeFalsy();



        //await page.pause();
    });

