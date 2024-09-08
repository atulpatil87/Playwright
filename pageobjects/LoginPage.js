class LoginPage {

// Create Constructor
    constructor(page){
    this.page = page;
    this.email = page.getByPlaceholder("Email Address");
    this.password = page.getByPlaceholder("Password");
    this.LoginBtn = page.getByText("Access Free Resources");
    this.emailTab = page.getByText("Email")
    this.forgetPassword = page.locator("#forget_password");
    }

    // Create method for the goto
    async goto(){
        await this.page.goto("https://staging.mim-essay.com/login");
    }

    // switch the tab [phone to email]
    async switchTab(){
        await this.emailTab.click();
        await this.forgetPassword.waitFor();
    }

// Create method for the login
// Method to perform a valid login.
    async validLogin(Email,password){
        await this.email.fill(Email);
        await this.password.fill(password);
        await this.LoginBtn.click();
    }
}

// Exporting the class as a module.
// module.exports = {LoginPage};
export default LoginPage;