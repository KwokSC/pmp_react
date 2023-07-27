import InputArea from "../components/Profile/InputArea"
import "./StartPage.css"

export default function StartPage() {

    return (
        <div>
            <div className="welcome-bar">
                <h1>Welcome</h1>
                <p>Let's start with your profile!</p>
            </div>
            <div className="container">
                <InputArea title="My Name is..." placeholder="Name" />
                <InputArea title="I am..." placeholder="Age" />
                <button className="submit-button">Submit</button>
            </div>
        </div>
    )

}