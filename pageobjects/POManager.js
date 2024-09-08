const test = require('@playwright/test')
import BookACall from "../pageobjects/BookACall";
import Intake from "../pageobjects/Intake";
import Calender from "../pageobjects/CalenderPage"

class POManager{
    constructor(page){
        this.page = page;
        this.calender = new Calender(this.page);
        this.intake = new Intake(this.page);
        this.bookACall = new BookACall(this.page);
    }
    
    getBookACall() {
        return this.bookACall;
    }

    getIntake(){
        return this.intake;
    }

    getCalender(){
        return this.calender;
    }
}
export default POManager;
