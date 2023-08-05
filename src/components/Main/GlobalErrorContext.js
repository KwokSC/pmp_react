// GlobalErrorContext.js
import React, { createContext, useContext, useState } from "react";

const GlobalErrorContext = createContext({
  error: null,
  setErrorMsg: undefined,
  clearError: undefined,
});

export const useGlobalError = () => {
  return useContext(GlobalErrorContext);
};

export const GlobalErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const setErrorMsg = (message) => {
    setError(message);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <GlobalErrorContext.Provider
      value={{ error: error, setErrorMsg: setErrorMsg, clearError: clearError }}
    >
      {children}
    </GlobalErrorContext.Provider>
  );
};
