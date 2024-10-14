describe('MouseHover actions', function () {
    // test case
    it('Scenario 1', function () {
        cy.visit("https://www.letskodeit.com/practice");

        // show hidden element with invoke
        cy.get('div.mouse-hover-content').invoke('show').contains('Top').click();
        //cy.screenshot();
        //click hidden element
      //  cy.contains('Top').click();

    });


});
