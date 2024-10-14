///<reference types="cypress"/>
describe("basicCommands", () => {

  it("AND commands", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should('include', 'saucedemo')//to check part of url
      .and('eq', 'https://www.saucedemo.com/')//nultiple assertins
      .and('contain', 'saucedemo')//to check it contains
  })

  it("ckeck", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //select radio1
    cy.get('[for="radio1"] > .radioButton').check()
    cy.get('[for="radio1"] > .radioButton').uncheck()
  })


  it("reload", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //select radio1
    cy.get('[for="radio1"] > .radioButton').check()
    //cy.get('[for="radio1"] > .radioButton').uncheck()
    cy.reload();
    cy.title().then(($title)=>{
      cy.log($title)
    })
  })

  it.only("uncheck", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // select single check box
    //cy.get('#checkBoxOption1').check()
    //select all
    //cy.get("#checkbox-example input[type='checkbox']").check()

    //check selective
    cy.get("#checkbox-example input[type='checkbox']").check(['option1','option2'])
    //unselecting s check box
    //cy.get('#checkBoxOption1').uncheck()
  })

  it("clear", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type("standard_user").clear();
    cy.get('input#password').type("secret_sauce");
  })

  it("click,back,forward", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type("standard_user");
    cy.get('input#password').type("secret_sauce");
    cy.get("[name='login-button']").click({scrollBehavior:"left"});
    // cy.wait(2000);
    // cy.go('back');
    // cy.wait(2000);
    // cy.go('forward');
    cy.get(':nth-child(2) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').click({scrollBehavior:'top'})
  })

  // it function to identify test
 it.skip('text vearification', function (){
  // test step to launch a URL
  cy.visit("https://www.saucedemo.com/")
  // identify element
  cy.get('.login_logo').then(function(e){
  //method text to obtain text content
  const t = e.text();
  cy.log("text is--",t)
  expect(t).to.contains('Swag Labs')
  }) 
  })


  it.skip("Type", () => {
    cy.visit("https://www.tutorialspoint.com/index.htm")
    cy.title().should('eq','Quality Tutorials, Video Courses, and eBooks');
    cy.get('#mobile-search-strings').type("Cypress Tutorial")
    cy.get('.clsHeadQuestion > a').click();
  })
})