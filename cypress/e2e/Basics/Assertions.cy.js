//<reference types="cypress"/>
describe("Assertions",()=>{
   
    it("Implicit assertions",()=>{
        cy.visit("https://register.rediff.com/register/register.php");
        //should    And 
        
        cy.url().should('include','register');//to check part of url
        cy.url().should('eq','https://register.rediff.com/register/register.php')//exact equal
        .and('contain','register')//to check it contains
        
         //multiple assertins
           cy.url().should('include','rediff')//to check part of url
             .and('eq','https://register.rediff.com/register/register.php')//nultiple assertins
             .and('contain','register')//to check it contains
             .and('not.contain','dossss')//Negative assertion


        //      //Title assertion
              cy.title().should('include','Rediffmail Free Unlimited Storage')
             
             //logo check
             cy.get('#Register').should('be.visible')//visible or not
             .and('exist');//logo exist or not

             cy.get("#mobno").should('have.length',10)
             //provided value into check
             cy.get("#mobno").type("9876543210").should('have.text','9876543210')//Value check


    })
    

    it("Explicit assertions",()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type("standard_user")
        cy.get('input#password').type("secret_sauce")
        cy.get("[name='login-button']").click()

        //for explicit assersion we have to write js function

        
        let exptitle="Products";
        cy.get('.title').then((title)=>{
           let actualtitle=title.text();

           //BDD assertion
           expect(actualtitle).to.equal(exptitle);
          // expect(exptitle).to.not.equal(actualtitle);

           //TDD assertions
           assert.equal(exptitle,'Products');
           //assert.notEqual(exptitle,actualtitle);

        })
        
        
    })
     
})
