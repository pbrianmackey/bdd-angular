describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="test"]').contains('Hello!!');
    cy.get('[data-cy="tab1"]').contains(' Content 1 ');
  })
})