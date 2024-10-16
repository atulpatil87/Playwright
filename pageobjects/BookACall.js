const {test,expect} = require('@playwright/test')
//const dataset = require("../Utils/bookACallTestData.json")

class BookACall {

    constructor(page){ 
        this.page = page;
        this.nameField = page.locator('#book_an_appointment_form').getByPlaceholder('Enter name');
        this.emailField = page.locator('#book_an_appointment_form').getByPlaceholder('Enter email');
        this.phoneField = page.locator('#book_an_appointment_form').getByPlaceholder('E.g. 7838xxxxxx');
        this.bacBtn = page.locator('#book_an_appointment_form').getByRole('button', { name: 'Book a Free Session' })
    }

    async goto(){
        await this.page.goto("https://staging.mim-essay.com/study-abroad-consultants")
    }

    async verifyInputEmpty(){
        await expect(this.nameField).toBeEmpty();
        await expect(this.emailField).toBeEmpty();
        await expect(this.phoneField).toBeEmpty();
    }

    async fillDetails(){
        await this.nameField.fill("Atul");
        await this.emailField.fill("Atul.p@mim-essay.com");
        await this.phoneField.fill("8552078787");
    }

    async bookSession(){
        await this.bacBtn.click();
    }
}

export default BookACall;

