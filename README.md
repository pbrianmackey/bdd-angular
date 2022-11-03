# About this project

I believe BDD is one of the most effective ways to ease communication between business and development. The Gherkin syntax is simple. You have a "Scenario" that uses the language "Given, When, Then" to describe a single requirement. For example:

```
Given I have a website
When I try to access the website
Then a login will require me to authenticate
```

This project focuses on end-to-end testing using https://cypress.io/. I use [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md) to allow Cypress to use Gherkin syntax.

# What is BDD?

https://cucumber.io/docs/bdd/

# Running the tests

## Run the project

npm run start

## Run Cypress tests at the command line

npm run e2e-headless

## Run Cypress tests in the UI

npm run e2e
