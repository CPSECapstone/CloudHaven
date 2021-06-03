describe('Missing email field', () => {
    it('Registers a new user with missing email field', function() {
        // hard coded login for now
        cy.visit('localhost:3000/register');
        cy.get('#first_name').type('John');
        cy.get('#last_name').type('Smith');
        cy.get('#phone_number').type('1234567');
        cy.get('#ssn').type('12345');
        cy.get('#password').type('test');
        cy.get('#cpassword').type('test');
        cy.contains('Sign Up').click();
        cy.contains('Invalid email');
        cy.url().should('include', '/register');
    });
});

describe('Passwords do not match', () => {
    it('Registers a new user where passwords do not match', function() {
        cy.visit('localhost:3000/register');
        cy.get('#email').type('fake@gmail.com');
        cy.get('#first_name').type('John');
        cy.get('#last_name').type('Smith');
        cy.get('#phone_number').type('1234567');
        cy.get('#ssn').type('12345');
        cy.get('#password').type('test');
        cy.get('#cpassword').type('test2');
        cy.contains('Sign Up').click();
        cy.contains('Passwords do not match');
        cy.url().should('include', '/register');
    });
});

describe('Existing email already registered', () => {
    it('Registers a new user with an already existing email', function() {
        cy.visit('localhost:3000/register');
        cy.get('#email').type('test@gmail.com');
        cy.get('#first_name').type('John');
        cy.get('#last_name').type('Smith');
        cy.get('#phone_number').type('1234567');
        cy.get('#ssn').type('12345');
        cy.get('#password').type('test');
        cy.get('#cpassword').type('test');
        cy.contains('Sign Up').click();
        cy.contains('Email is already registered');
        cy.url().should('include', '/register');
    });
});