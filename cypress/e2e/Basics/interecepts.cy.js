let b
describe('template spec', () => {
  it.skip('intercept', ()=>{
    cy.visit('https://rahulshettyacademy.com/')
    let interceptWait = 'https://sso.teachable.com/cdn-cgi/rum?'
    cy.intercept('POST', interceptWait).as('intercept')
    cy.get('div.login-btn').first().click()
    cy.wait('@intercept', {timeout:10000})
  })
  it.skip('Asynchronous1', ()=>{
    cy.visit('https://rahulshettyacademy.com/')
    cy.get('div.login-btn').first().then((a)=>{
      b = a
    })
  })
  it.skip('Asynchronous2', ()=>{
      expect(b).to.contain('Register')
  })
  it.skip('ConditionalTesting', ()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('div#login_credentials').invoke('text').then((example)=>{
      cy.log(example)
      const ex = example.split(':')[1]
      const ex2 = ex.split('locked')[0]
      cy.log(ex2)
    })
     
})
it.skip('ConditionalTesting12345', ()=>{
  let gData;
    cy.readFile('cypress/fixtures/filename.json').then((data) =>{
      let userCreds
      let userId = '1'
      userCreds = data.find(users => users.id === userId);
      let username = userCreds.lanId;
      cy.log("un", username)
      cy.log('gdata', data)
    })
})

  it.skip('.type() - type into a DOM element', () => {
    cy.visit('https://rahulshettyacademy.com/')
    let callRequestedUrl = `https://eventable.internal.teachable.com/add/fedora-client/`
    cy.intercept('POST', callRequestedUrl).as('callRequested');
    cy.get('div.login-btn').first().click();
    cy.wait('@callRequested', {timeout: 10000})    
  })
  it.skip('.type() - type into a DOM element', () => {
    cy.visit('https://rahulshettyacademy.com/')
    cy.get('div.login-btn').first().then((a)=>{
      expect(a).to.contain('Register')
    })
  })
  it('.type() - type into a DOM element', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get("li>#next2").click();
    cy.get('body').then((a)=>{
      if(a.find('li>#next2').length>1){
        //expect(a).to.contain('Register')
        cy.log('next is present')
      }else{
        cy.log('next button not found')
      }
    })
    })

})