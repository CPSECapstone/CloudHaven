// Link to Cypress docs for help: 
// https://docs.cypress.io/guides/getting-started/writing-your-first-test
// Run tests with "npx cypress run"

describe('Sample Cypress Test', () => {
   it('Visits the Cypress test website and clicks a link', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('get').click()
      cy.url().should('include', '/commands/querying');
   })
})
