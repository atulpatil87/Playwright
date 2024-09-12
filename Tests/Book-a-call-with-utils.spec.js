const {test,expect} = require('@playwright/test')
import POManager from "../pageobjects/POManager";
const Dataset = JSON.parse(JSON.stringify(require("../Utils/bookACallTestData.json")))


test("Book a call with Utils", async ({page}) => {
    
  // create a instance
  const poManager = new POManager(page);

  const bookACall = poManager.getBookACall();

  // go to the book a call page.
  await bookACall.goto();

  // Verify the Heading.
  //await expect(page.locator('div').filter({ hasText: "We can help you get into your Dream Schools" })).toBeVisible();

  // Verify the input box should be Empty.
  await  bookACall.verifyInputEmpty();

  // Enter the Details
  await bookACall.fillDetails();

  // Click on Book a Free Strategy Session.
  await bookACall.bookSession();

  // create instance of intake class
  const intake = poManager.getIntake();

  // Select Intake
  await intake.selectIntake1();

  // Create instance of calender.
  const calender = poManager.getCalender();

   // adding wait until network calls
   await page.waitForLoadState("networkidle");

  // Verify the calender Content.
  await calender.verifyContent();

  // Book a slot.
  await calender.bookSlot();

  });