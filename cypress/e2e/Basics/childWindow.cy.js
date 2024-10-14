//NOTE: Below scenarios will work when there is a anchor tab in web elements locator
describe('Tutorialspoint', function () {
 // test case
it('open new tab removing target', function (){
// url launch 
cy.visit("https://the-internet.herokuapp.com/windows")
// delete target attribute with invoke for link
cy.get('.example > a').invoke('removeAttr', 'target').click()
// verify child window url
cy.url()
.should('include', 'https://the-internet.herokuapp.com/windows/new')
// shift to parent window
cy.go('back');
 }); 

 it('validate new tab', function (){
    // url launch 
    cy.visit("https://www.letskodeit.com/practice")
    cy.get('#opentab').should('have.attr','href').and('include','/courses')
     }); 

     it.only('visit new tab , without removing attribute', ()=>{ 
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').then((newTab)=>{
           const tab= newTab.prop('href');
           cy.visit(tab)
           cy.url().should('include','/courses');
           cy.get('input[id="search"]').type('selenium');
           cy.get('button[class="find-course search-course"]').click()
        })
})

        
});
