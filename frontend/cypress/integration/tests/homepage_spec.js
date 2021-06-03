describe('Landing page test', () => {
    it('Verifies home page populates correctly', function() {
        // hard coded login
        cy.visit('localhost:3000/login');
        cy.get('#email').type('test@gmail.com');
        cy.get('#password').type('test');
        cy.contains('Sign In').click();
        
        cy.contains('User Profile');
        cy.contains('Messages');
        cy.contains('Calendar');   
    });
  });