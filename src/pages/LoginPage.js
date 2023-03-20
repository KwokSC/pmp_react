import { useState } from "react";

import "./LoginPage.css";
import logo from "./cat.jpg"
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Login/RegisterForm";

export default function LoginPage() {

    const [hidden, change] = useState(false);

    const handleClick = ()=>{
      change(current => !current);
    }
    
    return (
        <div className="container">
            <div className={`form-box ${hidden ? 'slide' : ''}`}>
            <RegisterForm hidden = {hidden}/>
            <LoginForm hidden = {hidden}/>
        </div>
            <div className="con-box left">
                <h2>Welcome to PMP</h2>
                <p>Join our pet community</p>
                <img src={logo} alt="Logo"></img>
                <button onClick={handleClick}>Already have an account</button>
            </div>
            <div className="con-box right">
                <h2>Welcome to PMP</h2>
                <p>Start meeting with other pets</p>
                <img src={logo} alt="Logo"></img>
                <button onClick={handleClick}>Sign up</button>
            </div>
        </div>
    )
}