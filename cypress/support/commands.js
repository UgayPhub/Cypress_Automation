// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("register", (userData) => {
  cy.get("[data-qa='signup-name']").type(userData.name);
  cy.get("[data-qa='signup-email']").type(userData.email);
  cy.contains("Signup").click();
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("[data-qa='login-email']").type(email);
  cy.get("[data-qa='login-password']").type(password);
  cy.contains("Login").click();
});

Cypress.Commands.add("addProductToCart", (productId) => {
  cy.get(`[data-product-id='${productId}']`).first().click();
  cy.contains("Continue Shopping").click();
});

