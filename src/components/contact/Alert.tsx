import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { SAlert, SText } from "./Alert.style";

type Props = {
  show: boolean;
  success: boolean;
  onClose: () => void;
};

const alertSuccessMessage = "Message successfully sent";
const alertErorrMessage = "Sending message failed";
const timeToAutoHide = 2000;

const Alert: React.FC<Props> = ({ onClose, success, show }) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (show) timeoutRef.current = setTimeout(onClose, timeToAutoHide);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [show, onClose]);

  function handleClick() {
    if (show) onClose();
  }

  const comp = (
    <SAlert isError={!success} show={show} onClick={handleClick}>
      <SText>{success ? alertSuccessMessage : alertErorrMessage}</SText>
    </SAlert>
  );

  return createPortal(comp, document.querySelector("#root")!);
};

export default Alert;
