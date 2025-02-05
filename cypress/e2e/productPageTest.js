import ProductPage from "../support/pages/ProductPage";
import LoginPage from "../support/pages/LoginPage";
import CheckoutPage from "../support/pages/CheckoutPage";
import CartPage from "../support/pages/CartPage";

describe("Product Page Tests", () => {
  it("Verify all products are visible", () => {
    ProductPage.visit();
    ProductPage.verifyAllProductsVisible();
  });

  it("View product details", () => {
    ProductPage.visit();
    ProductPage.viewProductDetails(1);
  });

  it("Search for a product", () => {
    ProductPage.visit();
    ProductPage.searchProduct("T-shirt");
  });

  it("Add product to cart", () => {
    ProductPage.visit();
    ProductPage.addProductToCart(1);
  });
  it("Add recommended item to cart", () => {
    LoginPage.visit();
    LoginPage.login("Jigme1@gmail.com", "123456");
    ProductPage.addRecommendedItemToCart();
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
  it("Add review towards your product", () => {
    ProductPage.visit();
    ProductPage.viewProductDetails(1);
    ProductPage.addReview(
      "Ugyen",
      "Jigme1@gmail.com",
      "I love learning cypress and i am proud of myself"
    );
  });
  it("Removing cart", () => {
    LoginPage.visit();
    LoginPage.login("Jigme1@gmail.com", "123456");
    ProductPage.visit();
    ProductPage.verifyAllProductsVisible();
    ProductPage.addCartToCheckRemoveFun();
    CartPage.visit();
    CartPage.removeCartFromTable(1);
  });
  it("Viewing Brand Product", () => {
    LoginPage.visit();
    LoginPage.login("Jigme1@gmail.com", "123456");
    ProductPage.visit();
    ProductPage.viewBrandProduct("H&M");
  });
  it.only("Adding cart twice/thrice from the selected card", () => {
    LoginPage.visit();
    LoginPage.login("Jigme1@gmail.com", "123456");
    ProductPage.visit();
    ProductPage.verifyAllProductsVisible();
    ProductPage.addProductToCart(2);
    ProductPage.viewProductDetails(1);
    ProductPage.increasingOrderFromCart("5");
    CartPage.visit();
  });
});
