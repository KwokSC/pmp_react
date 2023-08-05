import React from "react";
import { useGlobalError } from "./GlobalErrorContext";

const ErrorModal = () => {
  const { error, clearError } = useGlobalError();
  const modalClassName = `error-content ${error ? 'active' : ''}`;

  if (!error) {
    return null;
  }

  return (
    <div className={modalClassName}>
      <p>{error}</p>
      <button onClick={clearError}>Dismiss</button>
    </div>
  );
};

export default ErrorModal;
