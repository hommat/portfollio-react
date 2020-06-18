import React from "react";

import Form from "./Form";
import { SContact, SEmail } from "./Contact.style";

const Contact = () => {
  return (
    <SContact className="section">
      <h3 className="section__heading" id="contact">
        Contact
      </h3>
      <p>
        Email me at
        <SEmail>placeholder@placeholder.com</SEmail> or use form below
      </p>
      <Form />
    </SContact>
  );
};

export default Contact;
