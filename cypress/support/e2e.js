// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('login', (email = "' OR TRUE --", pw = 'testtest') => {
    cy.get('#navbarAccount').should('be.visible').click();
    cy.get('#navbarLoginButton').should('be.visible').click();

    cy.get('.mat-card').should('be.visible');
    cy.get('#email').type(email, { log: false });
    cy.get('#password').type(pw, { log: false });
    cy.get('#loginButton').should('be.enabled').click();

    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').should('exist');
})

Cypress.Commands.add('handleCookieAndDialogues', (email = "' OR TRUE --", pw = 'testtest') => {
    cy.get('.cc-btn').should('be.visible').click();
    cy.get('.cc-btn').should('not.be.visible');
    cy.get('.close-dialog').should('be.visible').click();
    cy.get('.cc-btn').should('not.be.visible');
})