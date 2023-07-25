
import { Link } from "react-router-dom";
import { removeAuthToken } from "../Login/auth";
import { useState } from "react";
import api from "../../requests/api";
import { useEffect } from "react";
export default function MenuBar() {

    const[userId, setUserId] = useState("");
    const generateProfileLink = (userId) => `/profile/${userId}`
    const generateChatLink = (userId) => `/chat/${userId}`

    useEffect(()=>{
        api
        .get("/profile/getSelfProfile")
        .then((response)=>{
            setUserId(response.data.data.userId)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    function handleSetting(){

    }

    function handleLogout(){
        removeAuthToken()
    }

    return (
        <div className="menu-bar">
            <Link to={generateProfileLink(userId)} className="button">Profile</Link>
            <Link to="/setting" className="button" onClick={handleSetting}>Settings</Link>
            <Link to={generateChatLink(userId)} className="button">Chat</Link>
            <Link to="/" className="button" onClick={handleLogout}>Logout</Link>
        </div>
    )
}