class ContactPage {
  visit() {
    cy.visit("/contact_us");
  }

  submitForm(name, email, subject, message) {
    cy.get("[data-qa='name']").type(name);
    cy.get("[data-qa='email']").type(email);
    cy.get("[data-qa='subject']").type(subject);
    cy.get("[data-qa='message']").type(message);
    // cy.get("[type='submit']").click();
  }
}

export default new ContactPage();
