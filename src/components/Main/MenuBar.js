import "./MenuBar.css"
import { Link, useLocation } from "react-router-dom";
import { removeAuthToken } from "../Login/auth";
import { useState } from "react";
import api from "../../requests/api";
import { useEffect } from "react";

export default function MenuBar() {

    const[userId, setUserId] = useState("");
    const generateProfileLink = (userId) => `/profile/${userId}`
    const generateChatLink = (userId) => `/chat/${userId}`
    const location = useLocation()
    const [activePage, setActivePage] = useState("match");

    useEffect(()=>{
        api
        .get("/profile/getSelfProfile")
        .then((response)=>{
            setUserId(response.data.data.userId)
        })
        .catch((error)=>{
            console.log(error)
        })
        updateActivePage()
    },[location]) // eslint-disable-line react-hooks/exhaustive-deps


    function updateActivePage(){
        const path = location.pathname
        if (path === "/match") {
            setActivePage("match");
          } else if (path.startsWith("/profile")) {
            setActivePage("profile");
          } else if (path === "/setting") {
            setActivePage("setting");
          } else if (path === "/chat") {
            setActivePage("chat");
          } else {
            setActivePage("discover"); // Default to "discover" for other paths
          }
    }

    function handleSetting(){

    }

    function handleLogout(){
        removeAuthToken()
    }

    return (
        <div className="menu-bar">
            <Link to="/match" className={`button ${activePage === "match" ? "active" : ""}`}>Match</Link>
            <Link to={generateProfileLink(userId)} className={`button ${activePage === "profile" ? "active" : ""}`}>Profile</Link>
            <Link to="/setting" className={`button ${activePage === "setting" ? "active" : ""}`} onClick={handleSetting}>Settings</Link>
            <Link to={generateChatLink(userId)} className={`button ${activePage === "chat" ? "active" : ""}`}>Chat</Link>
            <Link to="/" className="button" onClick={handleLogout}>Logout</Link>
        </div>
    )
}