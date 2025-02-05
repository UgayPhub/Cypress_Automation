import LoginPage from "./LoginPage";

class ProductPage {
  visit() {
    cy.visit("/products");
  }

  verifyAllProductsVisible() {
    cy.contains("All Products").should("be.visible");
    cy.get(".features_items").should("have.length.greaterThan", 0);
  }

  viewProductDetails(productId) {
    cy.get(`[href='/product_details/${productId}']`).click();
    cy.get(".product-information").should("be.visible");
  }

  searchProduct(productName) {
    cy.get("#search_product").type(productName);
    cy.get("#submit_search").click();
    cy.get(".features_items").should("have.length.greaterThan", 0);
  }
  addProductToCart(productId) {
    cy.get(`[data-product-id='${productId}']`).first().click();
    cy.get(".modal-content").contains("Continue Shopping").click();
  }
  addRecommendedItemToCart() {
    cy.contains("recommended items").scrollIntoView();
    cy.contains("recommended items").should("be.visible");
    cy.get("[data-ride='carousel']")
      .eq(1)
      .then(($carousel) => {
        cy.wrap($carousel).invoke("carousel", "next");
        cy.get("[data-product-id='1']")
          .should("be.visible")
          .eq(2)
          .contains("Add to cart")
          .click();
        cy.contains("Continue Shopping").click();
        cy.contains("Cart").click();
        cy.contains("Cart").should("be.visible");
      });
  }

  addReview(name, email, review) {
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#review").type(review);
    cy.get("#button-review").click();
    cy.contains("Thank you for your review.").should("be.visible");
  }
  searchAndAddCart(productId) {
    cy.get(".product-image-wrapper")
      .first()
      .then((product) => {
        cy.wrap(product)
          .get(".add-to-cart")
          .first()
          .contains("Add to cart")
          .click();
        cy.contains("Continue Shopping").click();
        cy.contains("Cart").click();
        cy.contains("Cart").should("be.visible");
      });
  }
  addCartToCheckRemoveFun(productId) {
    cy.get(".product-image-wrapper")
      .first()
      .then(($product) => {
        cy.wrap($product).trigger("mouseover");
        cy.wrap($product).find("[data-product-id='1']").first().click();
        cy.wrap($product)
          .get(".modal-content")
          .contains("Continue Shopping")
          .click();
      });
    cy.get(".product-image-wrapper")
      .eq(1)
      .then(($product) => {
        cy.wrap($product).trigger("mouseover");
        cy.wrap($product).find("[data-product-id='2']").first().click();
        cy.wrap($product)
          .get(".modal-content")
          .contains("Continue Shopping")
          .click();
      });
  }

  viewBrandProduct(brandurl) {
    cy.contains("Brands").should("be.visible");
    cy.get(".brands-name").then((brand) => {
      cy.wrap(brand).find(`[href="/brand_products/${brandurl}"]`).click();
    });
  }
  increasingOrderFromCart(quantity) {
    cy.get("#quantity").clear().type(quantity);
    cy.contains("Add to cart").click();
    cy.contains("Continue Shopping").click();
  }
}

export default new ProductPage();
