import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { setAuthToken } from "./auth"

export default function RegisterForm({ hidden }) {

    const [user_account, setAccount] = useState("")
    const [user_email, setEmail] = useState("")
    const [user_password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    function handleRegister(event) {
        event.preventDefault()
        const user = {
            userAccount: user_account,
            userEmail: user_email,
            userPassword: user_password,
        }
        axios.post("http://localhost:8080/user/register", user)
            .then(response => {
                if (response.data.data) {
                    setAuthToken(response.data.data)
                    navigate("/start")
                }
            })
            .catch(console.error());
    }

    return (
        <form className={`register-box ${hidden ? '' : 'hidden'}`} onSubmit={handleRegister}>
            <h1>register</h1>
            <input placeholder="Account"
                value={user_account} 
                onChange={(e)=>setAccount(e.target.value)}/>
            <input type="email"
                placeholder="Email"
                value={user_email}
                onChange={(e)=>setEmail(e.target.value)} />
            <input type="password"
                placeholder="Password"
                value={user_password} 
                onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password"
                placeholder="Confirm Password"
                value={confirm_password} 
                onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <button type="submit">Register</button>
        </form>
    );
}