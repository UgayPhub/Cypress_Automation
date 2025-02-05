class RegisterPage {
  visit() {
    cy.visit("/signup");
  }

  register(userData) {
    cy.get("[data-qa='signup-name']").type(userData.name);
    cy.get("[data-qa='signup-email']").type(userData.email);
    cy.contains("Signup").click();
    cy.get("#password").type(userData.password);
    cy.get("#days").select(userData.day);
    cy.get("#months").select(userData.month);
    cy.get("#years").select(userData.year);
    cy.get("#first_name").type(userData.firstName);
    cy.get("#last_name").type(userData.lastName);
    cy.get("#company").type(userData.company);
    cy.get("#address1").type(userData.address);
    cy.get("#country").select(userData.country);
    cy.get("#state").type(userData.state);
    cy.get("#city").type(userData.city);
    cy.get("#zipcode").type(userData.zipcode);
    cy.get("#mobile_number").type(userData.mobile);
    cy.contains("Create Account").click();
  }
}

export default new RegisterPage();
