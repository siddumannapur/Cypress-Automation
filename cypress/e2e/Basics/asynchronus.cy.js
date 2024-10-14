describe("basicCommands", () => {

    it("asynchronous", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.wait(5000)
      cy.url().should('include', 'saucedemo')//to check part of url
        .and('eq', 'https://www.saucedemo.com/')//nultiple assertins
        .and('contain', 'saucedemo')//to check it contains
        console.log('Asynchronous behaviour')
    })
})