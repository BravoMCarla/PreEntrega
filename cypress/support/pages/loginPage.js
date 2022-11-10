export class LoginPage {
    constructor() {
        this.userInput = "#user";
        this.passwordInput = "#pass";
        this.buttonLogin = "#submitForm";

    }

    writeUser(user){
        cy.get(this.userInput).type(user);

    };

    writePassword(password){
        cy.get(this.passwordInput).type(password);

    };

    clickLoginButton(){
        cy.get(this.buttonLogin).click();

    }
}