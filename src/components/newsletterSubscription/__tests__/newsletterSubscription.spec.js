import { mount } from "cypress-react-unit-test";
import NewsletterSubscription from "../newsletterSubscription";

describe("<NewsletterSubscription/>", () => {
  it("should render", () => {
    mount(<NewsletterSubscription />);
    cy.get("#newsletter-email").should("be.visible");
  });

  it("should submit form", () => {
    mount(<NewsletterSubscription />);
    cy.get("#newsletter-email").type("test@email.com");
    cy.get("button").click();
    // does not verify anythin besides being able to perform the action
  });
});
