import { util, utilities } from "../../support/utilities";

describe('API testing',()=>{
let gd;
before('fixture data',()=>{
    cy.fixture('apiTesting.json').then((data)=>{
        gd=data;
    })
})
    it.skip('POST request validation',()=>{

        const reqBody={
            name: "name1",
            email: "name1@g.com",
            gender: "female",
            status: "Active"
        }
        cy.request(
            {
            method:'POST',
            url:'https://reqres.in/api/users',
            // header:{
            //     'authorization':''
            // }
            body:reqBody
        }).as('users')
        cy.get('@users').then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.be.eq(201);
            expect(res.body).has.property("name","name1")
            expect(res.body).not.has.property('address')
            expect(res.body.name).to.be.eq('name1');
            expect(res.body.name).to.equal('name1');
        })
    })

    it.skip('POST request validation--fixture data',()=>{

        const reqBody={
            name: gd.tid.name,
            email: gd.tid.email,
            gender: gd.tid.gender,
            status: gd.tid.status
        }
        cy.request(
            {
            method:'POST',
            url:'https://reqres.in/api/users',
            // header:{
            //     'authorization':''
            // }
            body:reqBody
        }).as('users')
        cy.get('@users').then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.be.eq(201);
            expect(res.body).has.property("name","name1")
            expect(res.body).not.has.property('address')
            expect(res.body.name).to.be.eq('name1');
            expect(res.body.name).to.equal('name1');
        })
    })

    it('POST request validation--randomise data',()=>{

        const reqBody={
            name: gd.tid.name,
            email: util.random_email(),
            gender: gd.tid.gender,
            status: gd.tid.status
        }
        cy.request(
            {
            method:'POST',
            url:'https://reqres.in/api/users',
            // header:{
            //     'authorization':''
            // }
            body:reqBody
        }).as('users')
        cy.get('@users').then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.be.eq(201);
            expect(res.body).has.property("name","name1")
            expect(res.body).not.has.property('address')
            expect(res.body.name).to.be.eq('name1');
            expect(res.body.name).to.equal('name1');
            expect(res.body.email).to.equal(reqBody.email);
        })
    })

})