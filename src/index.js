import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Main/AuthContext";
import { GlobalErrorProvider} from "./components/Main/GlobalErrorContext";
import ErrorModal from "./components/Main/ErrorModal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalErrorProvider>
    <ErrorModal />
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </GlobalErrorProvider>
  </React.StrictMode>
);
