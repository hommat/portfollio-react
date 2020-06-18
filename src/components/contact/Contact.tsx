import React from "react";
import styled from "styled-components";

import Form from "./Form";

const SRoot = styled.section``;

const SHeading = styled.h3``;

const SEmail = styled.span``;

const Contact = () => {
  return (
    <SRoot>
      <SHeading id="contact">Contact</SHeading>
      <p>
        Email me at
        <SEmail>placeholder@placeholder.com</SEmail> or use form below
      </p>
      <Form />
    </SRoot>
  );
};

export default Contact;
