import { method } from "bluebird";
import { util, utilities } from "../../support/utilities";

describe('API testing',()=>{
let gd;
before('fixture data',()=>{
    cy.fixture('apiTesting.json').then((data)=>{
        gd=data;
    })
})

    it('request chaining',()=>{

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
           expect(res.status).to.eq(201);
           const userId=res.body.id;
           cy.request({
            method:'GET',
            url:'https://reqres.in/api/users'+'/'+userId
        }).then((res)=>{
            expect(res.body.name).to.eq(reqBody.name);
            expect(res.body.email).to.eq(reqBody.email);
            expect(res.body.status).to.eq(reqBody.status);
        })
        })
    })

})