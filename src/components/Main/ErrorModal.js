import React from "react";
import { useGlobalError } from "./GlobalErrorContext";

const ErrorModal = () => {
  const { errors, clearError } = useGlobalError();

  return (
    <div className="error-area">
      {errors.map((error, index) => (
        <div key={index} className="error-content active">
          <p>{error}</p>
          <button onClick={() => clearError(error)}>Dismiss</button>
        </div>
      ))}
    </div>
  );
};

export default ErrorModal;
