import { useState } from "react"
import InputArea from "../components/Profile/InputArea"
import PhotoUploader from "../components/Profile/PhotoUploader"
import "./StartPage.css"

export default function StartPage() {

    const [currentPage, setCurrentPage] = useState(0)
    const [uploadedPhotos, setUploadedPhotos] = useState(Array(9).fill(null))
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [breed, setBreed] = useState("")



    return (
        <form>
            <div className="welcome-bar">
                <h1>Welcome</h1>
                <p>Let's start with your profile!</p>
            </div>
            <div className="container">
                <PhotoUploader uploadedPhotos={uploadedPhotos} setUploadedPhotos={setUploadedPhotos} />
                <InputArea title="My Name is..." placeholder="Name" />
                <InputArea title="I am..." placeholder="Age" />
                <button className="submit-button">Next</button>
            </div>
        </form>
    )

}