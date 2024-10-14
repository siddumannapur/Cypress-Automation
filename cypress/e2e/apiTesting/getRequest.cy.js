describe('API testing',()=>{

    beforeEach('initiate url',()=>{
        cy.request(
            {
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            // header:{
            //     'authorization':''
            // }
        }).as('users')
    })

    it('GET request validation',()=>{
        cy.get('@users').then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body).has.length(10);
            expect(res.body[0]).has.property("name","Diptendu Tandon")
            expect(res.body[0]).not.has.property('address')
        })
    })

    it.only('GET request validate status',()=>{
        cy.get('@users').its('status').should('equal',200)
    })
})