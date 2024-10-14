 export class loginPage{
    
    navigateToLogin(){
        cy.visit("https://www.letskodeit.com/login")
    }

    enterEmail(email){
         cy.get('#email').type(email);
    }

    enterPassword(password){
        cy.get('#login-password').type(password);
    }

    clickLogin(){
        cy.get('#login').click();
    }

    loginToApp(email,password){
        login.enterEmail(email);
        login.enterPassword(password);
    }

}

export const login=new loginPage()