describe('Login Test', () => {
    it('store credentials in json file', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');

        cy.get('li>br+b').first().invoke('text').then(username => {
            cy.get('li>br+b').last().invoke('text').then(password => {
                const credentials = {
                    username: username.trim(),
                    password: password.trim()
                };
                cy.writeFile('cypress/fixtures/credentials.json', credentials);
            });
        });

        cy.fixture('credentials.json').then(credentials => {
            cy.get('#username').type(credentials.username);
            cy.get('#password').type(credentials.password);
            cy.get('#submit').click();
            cy.wait(2000)
            cy.get('.post-title').should('exist').and('have.text', 'Logged In Successfully')
        });
    });

    it('json file 2 ',()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.writeFile('cypress/fixtures/sample.json',
                {"username":"student", "password":"Password123"})
        cy.readFile('cypress/fixtures/sample.json').then(userData => {
        cy.get('input#username').type(userData.username)
        cy.get('input#password').type(userData.password)
        cy.get('#submit').click()
        })
    });

    it('text file',()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.writeFile('cypress/fixtures/TestDemo.txt','student \n');
        cy.writeFile('cypress/fixtures/TestDemo.txt','Password123',{flag:"a+"});
        cy.readFile('cypress/fixtures/TestDemo.txt').then(($text)=>{
         
        let word = $text.split('\n')
    
        const username = word[0].trim()
        const password = word[1].trim()
        cy.get('input#username').type(username)
        cy.get('input#password').type(password)
        cy.get('#submit').click()
    })
    
    })
    

});