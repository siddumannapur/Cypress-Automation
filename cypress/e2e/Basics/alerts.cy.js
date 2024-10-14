describe('Alerts', function () {
    // test case
    it('Scenario 1', function () { 
        cy.visit("https://register.rediff.com/register/register.php");
        cy.get('input[type="submit"]').click();
        // fire event with method on
        cy.on('window:alert', (alertText) => {
            //assertions
            expect(alertText).to.contains('Your full name');
        })
        cy.screenshot();
    });

    it("Alerts 2", function () {
        //URL launched
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //fire confirm browser event and accept
        cy.get(':nth-child(2) > button').click()
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            //return false;
            expect(t).to.equal("I am a JS Confirm");
        });
    });

    it.only("Alerts 3", function () {
        //URL launch
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //handling prompt alert
        cy.window().then(function (p) {
            //stubbing prompt window
            const data="data"
            cy.get(':nth-child(3) > button').click()
            cy.stub(p, "prompt").returns(data);
            cy.get('#result').contains(data)
        });
        cy.screenshot();
    });



})