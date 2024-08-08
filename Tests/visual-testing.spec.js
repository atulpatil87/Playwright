const {test, expect} = require('@playwright/test')

test('visual testing',async ({page}) => {
    // go to the website
    await page.goto("https://mim-essay.com");

    // fist it take screenshot and compare
    expect(await page.screenshot()).toMatchSnapshot("homepage.png"); // toMatchSnapshot is not present then it rename the newly captured image, and compare with the next RUN.
})