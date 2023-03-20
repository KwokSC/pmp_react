import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { setAuthToken } from "./auth"

export default function LoginForm({ hidden }) {

    const [user_account, setAccount] = useState("")
    const [user_password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleLogin(event) {
        event.preventDefault()
        axios.post("http://localhost:8080/user/login",
            {
                userAccount: user_account,
                userPassword: user_password
            })
            .then(response => {
                if (response.data.data) {
                    setAuthToken(response.data.data)
                    navigate("/match")
                }
            })
            .catch(console.error());
    }

    return (
        <form className={`login-box ${hidden ? 'hidden' : ''}`} onSubmit={handleLogin}>
            <h1>login</h1>
            <input type="account"
                placeholder="Account"
                value={user_account}
                onChange={(e) => setAccount(e.target.value)} />
            <input type="password"
                placeholder="Password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}