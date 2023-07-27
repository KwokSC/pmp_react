import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "./auth"
import base from "../../requests/base"

export default function RegisterForm({ hidden }) {

    const [user_account, setAccount] = useState("")
    const [user_email, setEmail] = useState("")
    const [user_password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    function handleRegister(event) {
        event.preventDefault()

        // Submit new user information
        const user = {
            userAccount: user_account,
            userEmail: user_email,
            userPassword: user_password,
        }
        base.post("/user/register", user)
            .then(response => {

                // If user creation succeed, navigate to "/start" to complete profile information form
                if (response.data.data) {
                    setAuthToken(response.data.data.token + "")
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
                onChange={(e) => setAccount(e.target.value)} />
            <input type="email"
                placeholder="Email"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)} />
            <input type="password"
                placeholder="Password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)} />
            <input type="password"
                placeholder="Confirm Password"
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}