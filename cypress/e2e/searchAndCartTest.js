import LoginPage from "../support/pages/LoginPage";
import ProductPage from "../support/pages/ProductPage";
import CartPage from "../support/pages/CartPage";
import CheckoutPage from "../support/pages/CheckoutPage";

describe("Search Product and Verify Cart After Login", () => {
  it("Search for a product, add to cart, and verify after login", () => {
    ProductPage.visit();
    cy.get("#search_product").type("T-shirt");
    cy.get("#submit_search").click();
    ProductPage.searchAndAddCart(2);
    LoginPage.visit();
    LoginPage.login("Jigme1@gmail.com", "123456");
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
