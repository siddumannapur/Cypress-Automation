////<reference types="cypress"/>

describe('UI elements', () => {
  it.skip('check radio button', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //visibility of radio button
    cy.get("#radio-btn-example > fieldset > label:nth-child(2)").should('be.visible');//be represent behaviour of the element

    // select radion button
    cy.get('[for="radio1"] > .radioButton').click();

    //select radio1
    cy.get('[for="radio1"] > .radioButton').check().should('be.checked')
    cy.get('[for="radio2"] > .radioButton').should('not.be.checked')

    //select radio2
    cy.get('[for="radio2"] > .radioButton').check().should('be.checked')
    cy.get('[for="radio2"] > .radioButton').should('not.be.checked')
  


  })

    it('check check box', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

      //visibility of check box
      cy.get('#checkBoxOption1').should('be.visible');//be represent behaviour of the element

      // select single check box
         cy.get('#checkBoxOption1').check().should('be.checked');

        //unselecting s check box
         cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

       //selecting all the check box
       cy.get("input[type='checkbox']").eq(1).check();

       //uncheck all the elements
      cy.get("input[type='checkbox']").uncheck().should('not.be.checked');

       //select the first check box
       cy.get("input[type='checkbox']").last().check()

  }) 


})