
///<reference types="cypress"/>
describe('Handle dropdown', () => {

    it.skip('dropdown with select', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('option1')//select dropdown
        cy.wait(2000)
        cy.get('#dropdown-class-example').should('have.value', 'option1')//assert selected value
    })


    it('dropdown without select', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('Italy')
        cy.get('.ui-menu-item-wrapper').click({ force: true });

    })


    //using random words selection
    it.skip('dropdown without select', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let stringToSearch = Array.from({ length: 2 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
        cy.get('#autocomplete').type(stringToSearch)
        cy.get('.ui-menu-item-wrapper').click({ force: true });

    })

    //using random selection
    it.skip('dropdown without select', () => {
        cy.visit("https://formstone.it/components/dropdown/demo/");
         //cy.get('#demo_basic_2-dropdown-selected').click();
         cy.get('#demo_basic_2-dropdown-selected').click();
         cy.get("button[role='option']").then(($ele)=>{
             const randomClick =  $ele.toArray()
             return Cypress._.sample(randomClick);
         }).click({force:true});
 
         cy.get('#demo_basic_2-dropdown-selected').invoke('text').then(($name)=>{
             cy.log($name);
         })

    })



    it.skip('Auto suggestive dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('cricket')

        cy.get('.suggestion-title').contains('Cricket').click()

    })

    it('dynamic dropdown', () => {
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type('Cypress automation')
        cy.wait(2000)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click()

            }
        })
    })

    it.only('suggestive2',()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#autosuggest").then(autoListInput=>{
            cy.wrap(autoListInput).type("automation")
            
            cy.get("[class='ui-corner-all']").each((el,index,$list)=>{
                const itemText=el.text().trim();
                cy.wrap(el).should('contain',itemText);
                if(index<8){
                    cy.wrap(el).should('have.class','ui-corner-all')
                }
            })
            

        }).then(($list)=>{
            expect($list).to.have.length(8)
        })
    
    })

    it('suggestive2',()=>{
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#autosuggest").then(autoListInput=>{
            cy.wrap(autoListInput).type("automation")
            
            cy.get("[class='ui-corner-all']").each((el,index,$list)=>{
                const itemText=el.text().trim();
                if(itemText=='Cypress Automation') {
                    cy.wrap(el).click();
                }
            })
        })
    })
})