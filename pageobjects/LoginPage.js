class LoginPage {

// Create Constructor
    constructor(page){
    this.email = page.getByPlaceholder("Email Address");
    this.password = page.getByPlaceholder("Password");
    this.LoginBtn = page.getByText("Access Free Resources");
    }

    async validLogin(Email,password){
        await this.email.fill(Email);
        await this.password.fill(password);
        await this.LoginBtn.click();
    }

}

// Exporting the class as a module.
// module.exports = {LoginPage};
export default LoginPage;