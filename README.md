# dv01 Engineering Challenge

### Joel Latta

## Overview:

- This repo is a basic application with Cypress installed to run the requested test files for this challenge.
- The response to challenge 1 is in this README down below.
- The test file for challenge 2 can be found in cypress/e2e/mortgage_spec.cy.js.

## Installation Instructions:

- Clone the repo

### In the root folder, run the following commands in your terminal to start cypress locally:

- npm install
- npx cypress open

## Challenge #1 - Psuedo code on how I would test a login workflow with a given URL:

With the HTML code provided, utilizing Cypress I would perform the following:

I would create a custom command in cypress/support/commands.js for cleanliness and ease as well as set the base url in the cypress.config file:

    Cypress.Commands.add("getDataTest", (dataTestSelector) => {
        return cy.get(`[data-testid="${dataTestSelector}"]`);
    });

    Describe "login"
        BeforeEach
        Visit "/login"

    It "logs in"
        Access email field with cy.getDataTest("EMAIL_INPUT_FIELD")
        Type a valid email with .type()
        Access password field with cy.getDataTest("PASSWORD_INPUT_FIELD")
        Type a valid password with .type()
        Click the login button with cy.get('#submit-login').click()
        Verify the redirected location after login with cy.url().should('include', '/dashboard')


    It "should throw an error with invalid login"
        Access email field with cy.getDataTest("EMAIL_INPUT_FIELD")
        Type an invalid email with .type()
        Access password field with cy.getDataTest("PASSWORD_INPUT_FIELD")
        type an invalid password with .type()
        Click the login button with cy.get('#submit-login').click()
        Verify the correct error message is displayed
