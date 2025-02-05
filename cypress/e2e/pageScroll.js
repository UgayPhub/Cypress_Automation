import HomePage from "../support/pages/home";

describe("Scroll Tests", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it("Verify Scroll Down and Scroll Up without Arrow", () => {
    HomePage.scrollDown();
    HomePage.scrollUpWithoutArrow();
  });

  it("Verify Scroll Down and Scroll Up using Arrow Button", () => {
    HomePage.scrollDown();
    HomePage.scrollUpWithArrow();
  });
  it.only("Subscription", () => {
    HomePage.verifySubscriptionSection();
  });
});
