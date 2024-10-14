describe('letsKodeIt', function () { 
   
    it.only('iframes', ()=>{ 
       cy.visit("https://www.letskodeit.com/practice")
       cy.get("#courses-iframe").then((iframe)=>{
        const searchField=iframe.contents().find("#search")
        cy.wrap(searchField).type('selenium')//convert jquery into cypress elements
       })
})

       
});
