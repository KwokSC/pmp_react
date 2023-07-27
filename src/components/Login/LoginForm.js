import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { setAuthToken } from "./auth"
import { useContext } from "react";
import AuthContext from "../Main/AuthContext"
import base from "../../requests/base"
import api from "../../requests/api"

export default function LoginForm({ hidden }) {

    const [user_account, setAccount] = useState("")
    const [user_password, setPassword] = useState("")
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    async function handleLogin(event) {
        event.preventDefault()

        try{
            // Check user login information
            const loginResponse = await base.post("/user/login",{
                userAccount: user_account,
                userPassword: user_password
            })

            if(loginResponse.data.code === 200){
                // Obtain auth info from the response
                const authInfo = loginResponse.data.data;
                // Set auth token in the cookies
                setAuthToken(authInfo.token, authInfo.expiration)
                // Set user ID in the context
                context.onLogin(authInfo.userId)

                // Check if the user is a new user (without profile)
                // If it is a new user, navigate to "/start", otherwise to "/match"
                const isNewUserResponse = await api.get("/profile/isNewUser")
                const isNewUser = isNewUserResponse.data.data
                if(isNewUser){
                    navigate("/start")
                }else{
                    navigate("/match")
                }
            } else {
                setValid(false)
            }
        } catch(error){
            console.error("Error during login:", error)
        }
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