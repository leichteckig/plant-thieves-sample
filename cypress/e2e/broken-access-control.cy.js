describe('Broken access control', () => {
    xit('should not navigate to admin section...', () => {
      cy.visit('http://localhost:3000');

      cy.handleCookieAndDialogues();
      cy.login(); // Based on the first test

      cy.visit('http://localhost:3000/#/administration');
      cy.get('mat-card').should('be.visible');
      cy.contains('You are not allowed to access this page!');
    })
  })