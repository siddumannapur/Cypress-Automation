import { method } from "bluebird";
import { util, utilities } from "../../support/utilities";

describe('API testing',()=>{
let gd;
before('fixture data',()=>{
    cy.fixture('apiTesting.json').then((data)=>{
        gd=data;
    })
})

    before('POST request',()=>{// here insted of it we used before bcz POST will run before PUT request

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
        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.be.eq(201);
        })
    })

    it('PUT request',()=>{

        const PutReqBody={
            name: gd.tid2.name,
            email: util.random_email(),
            gender: gd.tid2.gender,
            status: gd.tid2.status
        }
        cy.request(
            {
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            // header:{
            //     'authorization':''
            // }
            body:PutReqBody
        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq(PutReqBody.name);
            expect(res.body.email).to.eq(PutReqBody.email);
        })
    })

    it('DELETE request',()=>{

        cy.request(
            {
            method:'DELETE',
            url:'https://reqres.in/api/users/2',
            // header:{
            //     'authorization':''
            // }
        
        }).then((res)=>{
            expect(res.status).to.eq(204);
        })
    })


})