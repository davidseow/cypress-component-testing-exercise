import { render } from "@testing-library/react";
import NewsletterSubscription from "../newsletterSubscription";

describe("<NewsletterSubscription/>", () => {
  test("should render", () => {
    const { asFragment } = render(<NewsletterSubscription />);

    expect(asFragment()).toMatchSnapshot();
  });
});
