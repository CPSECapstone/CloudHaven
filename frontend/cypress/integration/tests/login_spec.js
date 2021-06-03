describe('Successful login test', () => {
    it('Logs into cloudhaven with authenticated user', function() {
        // hard coded login for now
        cy.visit('localhost:3000/login');
        cy.get('#email').type('test@gmail.com');
        cy.get('#password').type('test');
        cy.contains('Sign In').click();
        cy.url().should('include', '/home');
    });
});

describe('Failed login test', () => {
    it('Attempts to log into cloudhaven with a non existent user', function() {
        cy.visit('localhost:3000/login');
        cy.get('#email').type('notaUser@gmail.com');
        cy.get('#password').type('NotReal');
        cy.contains('Sign In').click();
        //verifies that error messaging works
        cy.contains('Incorrect username or password');
        cy.url().should('include', '/login');
    });
});

describe('Missing password field', () => {
    it('Attempts to log into cloudhaven with just a email and no password', function() {
        cy.visit('localhost:3000/login');
        cy.get('#email').type('user1@yahoo.com');
        cy.contains('Sign In').click();
        //verifies that error messaging works
        cy.url().should('include', '/login');
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`email and password required!`)
        })
    });
});

describe('Missing email field', () => {
    it('Attempts to log into cloudhaven with just a password', function() {
        cy.visit('localhost:3000/login');
        cy.get('#password').type('password');
        cy.contains('Sign In').click();
        //verifies that error messaging works
        cy.url().should('include', '/login');
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`email and password required!`)
        })
    });
});

describe('Missing both fields', () => {
    it('Attempts to log into cloudhaven with no fields entered', function() {
        cy.visit('localhost:3000/login');
        cy.contains('Sign In').click();
        //verifies that error messaging works
        cy.url().should('include', '/login');
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`email and password required!`)
        })
    });
});
  