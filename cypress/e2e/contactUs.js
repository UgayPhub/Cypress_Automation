import ContactPage from "../support/pages/contactPage";
import LoginPage from "../support/pages/LoginPage";

describe("Contact Us Form Test", () => {
  it("Submit Contact Form", () => {
    LoginPage.visit();
    LoginPage.login("Jigme1@gmail.com", "123456");
    ContactPage.visit();
    ContactPage.submitForm(
      "Karma karma",
      "karma@example.com",
      "Test Subject",
      "This is a test message."
    );
    const fileName = "my_document.pptx";
    cy.get('[name="upload_file"]').selectFile(
      "cypress/fixtures/files/my_document.pptx"
    );
    cy.get('[data-qa="submit-button"]').click();
    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should("be.visible");
    cy.contains("Home").click();
  });
});
