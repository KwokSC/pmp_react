
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../Login/auth";

export default function MenuBar() {

    const navigate = useNavigate()

    function handleProfile(){
        
    }

    function handleSetting(){

    }

    function handleChat(){
        
    }

    function handleLogout(){
        removeAuthToken()
        navigate("/")
    }

    return (
        <div className="menu-bar">
            <button className="profile-button" onClick={handleProfile}>Profile</button>
            <button className="setting-button" onClick={handleSetting}>Settings</button>
            <button className="chat-button" onClick={handleChat}>Chat</button>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    )
}