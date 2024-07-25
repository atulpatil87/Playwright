const  {test,except, expect} = require('@playwright/test')


test('calender date handle', async ({page})=>{

    // expect data
    const date = 25;
    const month = 7;
    const year = 2024;
    const expected_date = [date,month,year];


    // navite to the website.
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    // open the cale.
    await page.locator(".react-date-picker__calendar-button").click();

    // click on navigator
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    // year
    await page.getByText(year).click();

    // month
    await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();

    // date
    await page.locator("//abbr[text()='"+date+"']").click();

    const input = await page.locator(".react-date-picker__inputGroup__input")

    for(var index = 0; index < input.lenghts; index++ ){

        const value = input[index].getAttribute("value");
        expect(value).toEqual(expected_date[index]);
    }










});