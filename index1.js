import "cypress-plugin-api"
import APIEndPoint from "./index.js"
import cypress from "cypress"

console.log(APIEndPoint.login)

let practicePromise= function(){
    return new Cypress.Promise((resolve,reject)=>{
        cy.api({
            method: "POST",
            url:"https://jsonplaceholder.typicode.com/users",
            failOnStatusCode:false,
            body:{
                name: 'John Doe',
                username: 'johndoe',
                email: 'john@example.com'
            }
        })
        
    }).then(msg=>{
       cy.log(msg.body)
    })
}
export default practicePromise