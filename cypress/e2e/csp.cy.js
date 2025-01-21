describe('CSP Challenge: Verify Content Security Policy', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#/login');
      cy.handleCookieAndDialogues();
    });
 
 
    it('checks for the presence and strength of the CSP header', () => {
        // Send a request to the homepage
        cy.request({
            method: 'GET',
            url: 'https://docs.cypress.io/', // Adjust if Juice Shop is running on another port
        }).then((response) => {
            // Verify the CSP header exists
            expect(response.headers).to.have.property('content-security-policy');
 
 
            // Extract the CSP header
            const cspHeader = response.headers['content-security-policy'];
            cy.log(quest);
 
 
            // Check for strict CSP directives
            expect(cspHeader).to.include("default-src 'self'"); // Default policy
            expect(cspHeader).to.not.include('*'); // No wildcard allowed
            expect(cspHeader).to.not.include('unsafe-inline'); // Avoid inline scripts
            expect(cspHeader).to.not.include('unsafe-eval'); // Avoid eval in scripts
        });
    });
 });
 
 
 
 
 
 
 
 