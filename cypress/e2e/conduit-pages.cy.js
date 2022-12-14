/// <reference types="cypress" />
 
beforeEach('',()=>{
    cy.visit('https://react-redux.realworld.io/#/?_k=b0twot')
})
// afterEach('',()=>{
    
// })

export class signUp{
// sgnUp(){
    
//     cy.get(':nth-child(3) > .nav-link').click()
//     cy.get(':nth-child(1) > .form-control').type('samuel21')
//     cy.get(':nth-child(2) > .form-control').type('samuelkojoenoh|@gmail.com')
//     cy.get(':nth-child(3) > .form-control').type('Kojo2121')
//     cy.contains('Sign up').should('be.visible').click()
// }
login(){
    cy.get(':nth-child(2) > .nav-link').click( )
    cy.get(':nth-child(1) > .form-control').type('samuelkojoenoh|@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('Kojo2121')
    cy.get('.btn').click()
}
newPost(){
    // cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    // cy.get('nav-link')
    cy.contains('New Post').should('be.visible').click()
    cy.get(':nth-child(1) > .form-control').type('Bos2e')
    cy.get(':nth-child(2) > .form-control').type('Fashion style')
    cy.get(':nth-child(3) > .form-control').type('the kind of dresses that make you hansome and beautiful')
    cy.contains('Publish Article').click()
    // cy.get('.btn').click()
    // cy.title('conduit')
    // cy.contains('Write a comment...').type('bad')
    // cy.get('.form-control').type('good')
    cy.get('[placeholder = "Write a comment..."]').type('good is great')
    cy.get('[type= "submit"]').click()
}
profile(){
    
    cy.get('.nav-link').children().contains('<img.user-pic>')
}
}