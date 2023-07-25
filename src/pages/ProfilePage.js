import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProfilePage() {

    const { userId } = useParams()

    useEffect(()=>{},[])

    return(
        <h1>This is {userId}'s profile.</h1>
    )
}