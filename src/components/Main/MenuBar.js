
import { Link } from "react-router-dom";
import { removeAuthToken } from "../Login/auth";
import { useState } from "react";

export default function MenuBar() {

    const[userId, setUserId] = useState("");

    function handleProfile(){
        
    }

    function handleSetting(){

    }

    function handleChat(){
        
    }

    function handleLogout(){
        removeAuthToken()
    }

    return (
        <div className="menu-bar">
            <Link to={"/profile/"+userId} className="button" onClick={handleProfile}>Profile</Link>
            <Link to="/setting" className="button" onClick={handleSetting}>Settings</Link>
            <Link to="/chat" className="button" onClick={handleChat}>Chat</Link>
            <Link to="/" className="button" onClick={handleLogout}>Logout</Link>
        </div>
    )
}