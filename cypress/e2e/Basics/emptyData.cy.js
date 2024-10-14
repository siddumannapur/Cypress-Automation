describe('letsKodeIt', function () { 
   
    it.only('handle empty data in input fields', ()=>{ 
       cy.visit("https://www.letskodeit.com/login")
       cy.get("#email").type('{backspace}');
       cy.get("#login").click();
       
})

       
});
