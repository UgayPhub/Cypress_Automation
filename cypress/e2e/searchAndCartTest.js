import LoginPage from "../support/pages/LoginPage";
import ProductPage from "../support/pages/ProductPage";

describe("Search Product and Verify Cart After Login", () => {
  it("Search for a product, add to cart, and verify after login", () => {
    ProductPage.visit();
    cy.get("#search_product").type("T-shirt");
    cy.get("#submit_search").click();
    ProductPage.searchAndAddCart(2);
    LoginPage.visit();
    LoginPage.login("Jigme1@gmail.com", "123456");
  });
});
