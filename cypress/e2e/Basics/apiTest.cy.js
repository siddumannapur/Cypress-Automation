describe('template spec', () => {
it('passes', () => {
//Getting response from BrowserStack demo website
cy.request('GET','https://www.bstackdemo.com/')
})
})

describe('template spec', () => {
  it('passes', () => {
  //Getting response from browserstack demo website 
  cy.request('GET','https://www.bstackdemo.com/').then((response) =>{
  //Expecting the response status code to be 200
  expect(response.status).to.eq(200)
  })
  })
  })