///<reference types="Cypress"/>
describe("practicing Cy and JS",function(){
    it("TC_1",function(){
        cy.visit("https://example.cypress.io/")
       cy.log(practicePromise())
       
    })
    it.only("practicing cy task",()=>{
        cy.task("writeMsg","Hey there how are ypu doing");
        cy.task("readMsg").then(message=>cy.log(message));
    })
})