import React from "react";

function handleFormSubmit(e) {
  e.preventDefault();
}

const NewsletterSubscription = () => (
  <div id="newsletter">
    <h3>Newsletter subscription</h3>
    <p>
      You can get it in your inbox. Sign up for hand-picked local news delivered
      weekly.
    </p>
    <div>
      <form noValidate="" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="newsletter-email"></label>
          <input
            placeholder="Email address"
            name="newsletter-email"
            aria-invalid="false"
            type="email"
            id="newsletter-email"
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div>
        <p>
          For more information on how we use your data, see our{" "}
          <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>
          . Unsubscribe in one click.
        </p>
      </div>
    </div>
  </div>
);

export default NewsletterSubscription;
