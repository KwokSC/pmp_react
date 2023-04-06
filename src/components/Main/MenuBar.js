
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../Login/auth";
import "./MenuBar.css"

export default function MenuBar() {

    const navigate = useNavigate()

    function handleProfile(){

    }

    function handleSetting(){

    }

    function handleLogout(){
        removeAuthToken()
        navigate("/")
    }

    return (
        <div className="menu-bar">
            <button className="profile-button">Profile</button>
            <button className="setting-button">Settings</button>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    )
}