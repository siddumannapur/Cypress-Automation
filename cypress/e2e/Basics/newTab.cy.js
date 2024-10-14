//NOTE: Below scenarios will work when there is NO anchor tab in web elements locator
describe('Tutorialspoint', function () { 
   
        it.only('visit new tab , without removing attribute', ()=>{ 
           cy.visit("https://www.letskodeit.com/practice")
           cy.window().then((win)=>{
            cy.stub(win,'open').callsFake(()=>{
                win.location.href='https://www.letskodeit.com/courses'
            }).as('windowOpen')
           })
           cy.get("#openwindow").click();
           cy.get('@windowOpen').should('be.calledWith','https://www.letskodeit.com/courses')
           cy.url().should('include','/courses');
           cy.get('input[id="search"]').type('selenium');
           cy.get('button[class="find-course search-course"]').click()
   })
   
           
   });
   