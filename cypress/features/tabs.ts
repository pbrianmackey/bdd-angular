import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the website', () => {
  cy.visit('https://pbrianmackey.github.io/bdd-angular/');
});

When('I view tab one', () => {});

Then('Tab one contains the expected content', () => {
  cy.get('[data-cy="tab1"]').contains(' Content 1 ');
});

When('I view tab two', () => {
  cy.get('#mat-tab-label-0-1').click();
});

Then('Tab two contains the expected content', () => {
  cy.get('[data-cy="tab2"]').contains(' Content 2 ');
});

When('I view tab three', () => {
  cy.get('#mat-tab-label-0-2').click();
});

Then('Tab three contains the expected content', () => {
  cy.get('[data-cy="tab3"]').contains(' Content 3 ');
});
