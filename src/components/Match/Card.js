import { Fragment, useState } from "react";
import Gallery from "./Gallery";
import Overview from "./Overview"

export default function Card({profile}){

    const [isDragged, setIsDragged] = useState();

    return (
        <div className="card">
            <Gallery images={profile.profileImages}/>
            <Overview name={profile.profileName} breed={profile.profileBreed} age={profile.profileAge}/>
        </div>
    )
}