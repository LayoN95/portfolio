import React from "react";

import "./contact.css";

function Contact() {
  return (
    <div className="app__contact app__wrapper" id="contact">
      <div className="app__contact-heading">
        <div className="heading-text">
          <h1>Contact Me:</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae ipsa numquam earum explicabo. Velit dolorum eaque
            sapiente beatae quae fugit!
          </p>
        </div>
      </div>
      <div className="app__contact_form">
        <form className="app__contact_form-input">
          <input type="text" name="name" placeholder="Your First Name" />
          <input type="email" name="email" placeholder="Your e-mail address" />
          <textarea name="message" placeholder="Your message" />
          <button>Send Your message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
