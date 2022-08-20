// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('userOption', (user) => {
    cy.get('select')
        .select(`${user}`)
        .should('have.value',`${user}`)
})

Cypress.Commands.add('nameUser', (nameUser) => {
    cy.get('.fontBig')
        .should('contain',`${nameUser}`)
})

Cypress.Commands.add('findByNgClass', (selector) => {
    return cy.get(`[ng-class=${selector}]`)
})

Cypress.Commands.add('makeDeposit', (mount) => {
    cy.get('.form-control')
    .should('be.visible')
    .type(`${mount}`)
    cy.get('.btn-default')
        .should('be.visible')
        .click()
})


Cypress.Commands.add('message', (message) => {
    return cy.get(`[ng-show=${message}]`)
})

Cypress.Commands.add('ngmodel', (ngmodel) => {
    return cy.get(`[ng-model=${ngmodel}]`)
})
Cypress.Commands.add('ngBinding', (value) => {
    return cy.get('.ng-binding')
    .eq(value)
})

Cypress.Commands.add('addAppointment', (appointment) => {
    cy.ngmodel('fName').type(appointment.name)
    cy.ngmodel('lName').type(appointment.lastName)
    cy.ngmodel('postCd').type(appointment.postCd)
    cy.get('.btn-default').contains('Add Customer').click()
})

export { }