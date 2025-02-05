class CartPage {
  visit() {
    cy.visit("/view_cart");
  }

  verifyCartContains(productId, price, quantity) {
    cy.get(`#product-${productId}`).should("be.visible");
    cy.get(".cart_price").should("contain", `Rs. ${price}`);
    cy.get(".cart_quantity").should("contain", quantity);
  }
  removeCartFromTable(){
    cy.get(".cart_quantity_delete").first().click();
    cy.get(".cart_quantity_delete").should("be.visible");
  }
  
}

export default new CartPage();
