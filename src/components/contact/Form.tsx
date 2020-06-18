import React, { useState } from "react";
import styled from "styled-components";

const SRoot = styled.form``;

const SInput = styled.input``;

const STextarea = styled.textarea``;

const SLabel = styled.label``;

const SButton = styled.button``;

const Form = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSubjectChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSubject(e.target.value);
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("not connected");
  }

  return (
    <SRoot onSubmit={handleSubmit}>
      <SLabel htmlFor="email">Email</SLabel>
      <SInput
        onChange={handleEmailChange}
        value={email}
        placeholder="example@mail.com"
        type="email"
        name="email"
        autoComplete="email"
        spellCheck="false"
        required
      />
      <SLabel htmlFor="subject">Subject</SLabel>
      <SInput
        onChange={handleSubjectChange}
        value={subject}
        placeholder="Job offer"
        type="text"
        id="subject"
        name="subject"
        autoComplete="off"
        required
      />
      <SLabel htmlFor="message">Message</SLabel>
      <STextarea
        onChange={handleMessageChange}
        value={message}
        placeholder="Hey, check out our offer!"
        name="message"
        id="message"
        autoComplete="off"
        required
      ></STextarea>
      <SButton type="submit">Send</SButton>
    </SRoot>
  );
};

export default Form;
