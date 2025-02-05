class HomePage {
  visit() {
    cy.visit("/");
  }
  verifySubscriptionSection() {
    cy.get("footer").scrollIntoView();
    cy.contains("Subscription").should("be.visible");
    cy.get("#susbscribe_email").type("testuser@gmail.com");
    cy.get("#subscribe").click();
    cy.contains("You have been successfully subscribed!").should("be.visible");
  }
  visit() {
    cy.visit("/");
  }

  scrollDown() {
    cy.get("footer").scrollIntoView();
    cy.wait(1000);
  }

  scrollUpWithoutArrow() {
    cy.scrollTo("top");
    cy.wait(1000);
  }

  scrollUpWithArrow() {
    cy.get("#scrollUp").click();
  }
}
export default new HomePage();
