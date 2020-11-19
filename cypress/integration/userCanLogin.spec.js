// <reference types="Cypress" /> //

describe("User authenticates", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("erik@erik6.se");
      cy.get("#password").type("password");
      cy.get('button').contains('Submit').click()
    });
    cy.get("#message").should("contain", "Hi erik@erik6.se");
  });

  it("unsuccessfully with invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("erik@erik6.se");
      cy.get("#password").type("wrongpassword");
      cy.get('button').contains('Submit').click()
    });
    cy.get("#message").should("contain", "Invalid login credentials. Please try again.");
  });
});
