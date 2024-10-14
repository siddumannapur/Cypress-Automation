//const cypress=require("cypress")
describe('My First Test', () => {
  it('Verify the title-positive', () => {
    //steps
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.fixture('sample.json').then((data) => {
      cy.fixture('cypress/fixtures/sampletext.txt').then((data) => {
      cy.get('#username').click().type(data.username)
      cy.get("#password").should('be.visible').type(data.password);
      cy.get("#submit").click();
    })
    cy.get('#opentab').invoke('removeAttr', 'target').click();
  })
  cy.screenshot();

})
})




