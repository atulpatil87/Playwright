import { expect } from "@playwright/test";
import { Module } from "module";

class Calendar {
    constructor(page){
        this.page = page;
        this.logo = page.locator(".cl--logo-img");
        this.heading = page.getByText('Minutes Consulting Session');
        this.RHScontent = page.getByText('Strengths and Weaknesses of your Profile Ideal Target Schools for your Profile');
        this.activeSlot = page.locator('.active');
        this.timeZone = page.getByText('India Standard Time');
        this.slotsTime = page.getByRole('button', { name: '5:00 PM' })
        this.confirmBtn = page.getByRole('button', { name: 'Confirm' });
    }

    async verifyContent(){
        await expect(this.logo).toBeVisible();
        await expect(this.heading).toBeVisible();
        await expect(this.RHScontent).toBeVisible();
        // await expect(this.activeSlot).toBeVisible();
        await expect(this.timeZone).toBeVisible();
        await expect(this.slotsTime).toBeVisible();
    }

    async bookSlot(){
        await this.slotsTime.click();
        await this.confirmBtn.click();
    }
}
export default Calendar;
