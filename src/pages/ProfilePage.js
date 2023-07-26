import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../components/Main/MenuBar";

export default function ProfilePage() {

    const { userId } = useParams()

    useEffect(()=>{},[])

    return(
        <div>
            <MenuBar/>
            <h1>This is {userId}'s profile.</h1>
        </div>
    )
}