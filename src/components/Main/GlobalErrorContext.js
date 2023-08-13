// GlobalErrorContext.js
import React, { createContext, useContext, useState } from "react";

const GlobalErrorContext = createContext({
  errors: [],
  setErrorMsg: undefined,
  clearError: undefined,
});

export const useGlobalError = () => {
  return useContext(GlobalErrorContext);
};

export const GlobalErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const addErrorMsg = (message) => {
    setErrors((prevErrors) => [...prevErrors, message]);
  };

  const clearError = (message) => {
    setErrors((prevErrors) => prevErrors.filter((error) => error !== message));
  };

  return (
    <GlobalErrorContext.Provider
      value={{ errors: errors, addErrorMsg: addErrorMsg, clearError: clearError }}>
      {children}
    </GlobalErrorContext.Provider>
  );
};
