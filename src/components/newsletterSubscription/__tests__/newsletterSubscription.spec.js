import { mount } from "cypress-react-unit-test";
import NewsletterSubscription from "../newsletterSubscription";

describe("<NewsletterSubscription/>", () => {
  it("should render", () => {
    mount(<NewsletterSubscription />);
    cy.get("#newsletter-email").should("be.visible");
  });
});
