import { FC } from "react";

const Contact: FC = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-content">
        <h1 className="contact-title">
          <span className="gradient-text">Get in Touch</span>
        </h1>
        <p className="contact-subtitle">
          Want to chat? Send me an email through this button, and I'll respond
          whenever I can.
        </p>
        <div className="contact-button-wrapper">
          <a
            href="mailto:saimahmedqazi22@gmail.com"
            className="contact-button"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
