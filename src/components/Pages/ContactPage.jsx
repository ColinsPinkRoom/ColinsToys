import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../../style/Contact.css";

function ContactPage() {
  const [state, handleSubmit] = useForm("mwpbblow"); // your unique Form ID

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      {state.succeeded ? (
        <p className="contact-success">✅ Thanks for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Honeypot Field (hidden from users) */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="name"
            name="name"
            required
            placeholder="Name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your message..."
            rows="5"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
