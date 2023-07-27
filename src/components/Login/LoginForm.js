import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { setAuthToken } from "./auth"
import { useContext } from "react";
import AuthContext from "../Main/AuthContext"
import base from "../../requests/base"

export default function LoginForm({ hidden }) {

    const [user_account, setAccount] = useState("")
    const [user_password, setPassword] = useState("")
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    async function handleLogin(event) {
        event.preventDefault()
        base.post("/user/login",
            {
                userAccount: user_account,
                userPassword: user_password
            })
            .then(response => {
                if (response.data.code === 200) {
                    const authInfo = response.data.data;
                    setAuthToken(authInfo.token, authInfo.expiration)
                    context.onLogin(authInfo.userId)
                } else {
                    setValid(false)
                }
            })
            .catch();
    }

    return (
        <form className={`login-box ${hidden ? 'hidden' : ''}`} onSubmit={handleLogin}>
            <h1>login</h1>
            <p hidden={valid}>Invalid Account or Password.</p>
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