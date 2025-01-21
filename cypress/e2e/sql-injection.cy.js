describe('Check for SQL injection', () => {
  it('should not excute this SQL injection...', () => {
    cy.visit('http://localhost:3000');
    cy.handleCookieAndDialogues();

    cy.get('#navbarAccount').should('be.visible').click();
    cy.get('#navbarLoginButton').should('be.visible').click();

    cy.get('.mat-card').should('be.visible');
    cy.get('#email').type("' OR TRUE --"); // Injection, get first user of DB
    cy.get('#password').type('whatever');

    cy.get('#loginButton').should('be.enabled').click();
    cy.get('.error').should('be.visible');
    cy.contains('Invalid email or password.');

  })
})