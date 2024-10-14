import { login } from "../../support/loginPage"

describe('Login Functionality',()=>{
let gd;
    before('before hook',()=>{
        cy.fixture('loginData').then((data)=>{
            gd=data;
        })
    })

    it('valid Login',()=>{
         login.navigateToLogin();
        // login.enterEmail();
        // login.enterPassword();
        // login.clickLogin();
        login.loginToApp(gd.login1.email,gd.login1.password);
        login.clickLogin();
    })
})