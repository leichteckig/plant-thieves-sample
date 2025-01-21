describe('CSRF Challenge: Change Username', () => {
    before(() => {
        cy.visit('http://localhost:3000');
        cy.handleCookieAndDialogues();
        cy.login(); // Based on the first test
    });

    it('attempts to change the user name without valid authentication', () => {
       cy.origin('https://example.com', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/profile/',
                body: {
                    username: 'MaliciousAdmin'
                },
                failOnStatusCode: false // Handle non-2xx response
            }).then((response) => {
                // Debugging output for better analysis
               cy.log(`Response: ${JSON.stringify(response.body)}`);
               cy.log(`Status Code: ${response.status}`);

               expect(response.status).to.be.oneOf([403,400]) // Expected response
            })
       })
    });
});
