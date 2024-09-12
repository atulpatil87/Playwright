const Dataset = JSON.parse(JSON.stringify(require("../Utils/bookACallTestData.json")))

class Intake{

    constructor(page){
        this.page = page;
        this.intake1 = page.locator('text='+Dataset.Intake1);
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
    }

    async selectIntake1(){
        await  this.intake1.click();
        await this.submitBtn.click();

    }
}
export default Intake;