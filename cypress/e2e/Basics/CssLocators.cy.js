describe('CssLocators', () => {
  it('select item', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type("standard_user");//id
    cy.get('input#password').type("secret_sauce");//tag id
    cy.get("[name='login-button']").click();//attribute
    // cy.get('#item_4_title_link').contains('Sauce Labs Backpack');//assert
    // cy.get('div.inventory_item_name').should('have.length',9);//assert 

    cy.get('div.inventory_item_name').each(function ($el, index, $list) {
      cy.log($el.text());
      // cy.log($list.text())
    })

  })
})