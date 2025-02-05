import CheckoutPage from "../support/pages/CheckoutPage";
import ProductPage from "../support/pages/ProductPage";
import loginPage from "../support/pages/LoginPage";
import CartPage from "../support/pages/CartPage";

describe("Checkout Process", () => {
  it("Place order after adding products", () => {
    ProductPage.visit();
    cy.addProductToCart(1);
    cy.addProductToCart(2);
    cy.contains("Cart").click();
    cy.contains("Signup / Login").first().click();
    loginPage.login("Jigme1@gmail.com", "123456");
    CartPage.visit();
    CheckoutPage.proceedToCheckout();

    CheckoutPage.verifyAddressDetails(
      "Mr. Jigme Jigme",
      "Babesa, Thimphu,11000",
      "California",
      "United States"
    );
    CheckoutPage.placeOrder();
    CheckoutPage.enterPaymentDetails("Jigme", "123456789", "123", "02", "2026");
    cy.contains("Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );
    cy.contains("Download Invoice").click();
    cy.contains("Continue").click();
  });
});
