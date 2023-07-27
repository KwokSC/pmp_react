import "./MenuBar.css"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function MenuBar() {

  const [userId, setUserId] = useState("");
  const generateProfileLink = (userId) => `/profile/${userId}`
  const generateChatLink = (userId) => `/chat/${userId}`
  const location = useLocation()
  const [activePage, setActivePage] = useState("match");
  const context = useContext(AuthContext)

  // Dynamically change the url based on the current user information
  useEffect(() => {
    setUserId(context.userId)
    updateActivePage()
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps


  function updateActivePage() {
    const path = location.pathname
    if (path === "/match") {
      setActivePage("match");
    } else if (path.startsWith("/profile")) {
      setActivePage("profile");
    } else if (path === "/setting") {
      setActivePage("setting");
    } else if (path.startsWith("/chat")) {
      setActivePage("chat");
    } else {
      setActivePage("match"); // Default to "match" for other paths
    }
  }

  function handleSetting() {
  }

  return (
    <div className="menu-bar">
      <Link to="/match" className={`button ${activePage === "match" ? "active" : ""}`}>Match</Link>
      <Link to={generateProfileLink(userId)} className={`button ${activePage === "profile" ? "active" : ""}`}>Profile</Link>
      <Link to="/setting" className={`button ${activePage === "setting" ? "active" : ""}`} onClick={handleSetting}>Settings</Link>
      <Link to={generateChatLink(userId)} className={`button ${activePage === "chat" ? "active" : ""}`}>Chat</Link>
      <Link to="/" className="button" onClick={context.onLogout}>Logout</Link>
    </div>
  )
}