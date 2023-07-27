import { createContext, useState } from "react";
import { removeAuthToken } from "../Login/auth";

const AuthContext = createContext(
  {
    userId: null,
    onLogin: undefined,
    onLogout: undefined,
  }
);

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState("")

  function loginHandler(userId) {
    setUserId(userId)
  }

  function logoutHandler() {
    setUserId(null)
    removeAuthToken()
  }

  return <AuthContext.Provider value={{
    userId: userId,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  }}>{children}</AuthContext.Provider>;
}

export default AuthContext;