import React, { useState, Fragment } from "react";

import Alert from "./Alert";
import { SForm, SInput, STextarea, SLabel, SButton } from "./Form.style";
import { post } from "../../utils";

type State = {
  email: string;
  subject: string;
  message: string;
  loading: boolean;
  showMessage: boolean;
  isMessageError: boolean;
};

const formspreeURL = "https://formspree.io/xaypbjon";

const Form = () => {
  const [state, setState] = useState<State>({
    email: "",
    subject: "",
    message: "",
    loading: false,
    showMessage: false,
    isMessageError: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setState({ ...state, [name as any]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { loading, email, subject, message } = state;
    e.preventDefault();
    if (loading) return;

    setState({ ...state, loading: true });
    const body = { email, subject, message };
    let errorOccured = false;

    try {
      await post(formspreeURL, body);
    } catch (e) {
      errorOccured = true;
    }

    setState({
      ...state,
      loading: false,
      showMessage: true,
      isMessageError: errorOccured,
      message: errorOccured ? state.message : "",
    });
  }

  function hideMessage() {
    setState({ ...state, showMessage: false });
  }

  return (
    <Fragment>
      <SForm onSubmit={handleSubmit}>
        <SLabel htmlFor="email">Email</SLabel>
        <SInput
          onChange={handleChange}
          value={state.email}
          placeholder="example@mail.com"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          spellCheck="false"
          required
        />
        <SLabel htmlFor="subject">Subject</SLabel>
        <SInput
          onChange={handleChange}
          value={state.subject}
          placeholder="Job offer"
          type="text"
          id="subject"
          name="subject"
          autoComplete="off"
          required
        />
        <SLabel htmlFor="message">Message</SLabel>
        <STextarea
          onChange={handleChange}
          value={state.message}
          placeholder="Hey, check out our offer!"
          name="message"
          id="message"
          autoComplete="off"
          required
        ></STextarea>
        <SButton type="submit" disabled={state.loading}>
          Send
        </SButton>
      </SForm>
      <Alert
        show={state.showMessage}
        success={!state.isMessageError}
        onClose={hideMessage}
      />
    </Fragment>
  );
};

export default Form;
