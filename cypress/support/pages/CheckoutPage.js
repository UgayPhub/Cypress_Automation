class CheckoutPage {
  proceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
  }

  placeOrder() {
    cy.contains("Place Order").click();
  }

  enterPaymentDetails(name, cardNumber, cvc, month, year) {
    cy.get("[data-qa='name-on-card']").type(name);
    cy.get("[data-qa='card-number']").type(cardNumber);
    cy.get("[data-qa='cvc']").type(cvc);
    cy.get("[data-qa='expiry-month']").type(month);
    cy.get("[data-qa='expiry-year']").type(year);
    cy.contains("Pay and Confirm Order").click();
  }
  verifyAddressDetails(name, address, city, country) {
    cy.contains(name).should("be.visible");
    cy.contains(address).should("be.visible");
    cy.contains(city).should("be.visible");
    cy.contains(country).should("be.visible");
  }
}

export default new CheckoutPage();
