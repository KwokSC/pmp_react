import { useState } from "react";
import "./Gallery.css"

export default function Gallery({ images }) {

    const [currentIndex, setIndex] = useState(0)
    const currentImage = images[currentIndex]

    function handleClick(event) {
        const clickedX = event.pageX - event.currentTarget.getBoundingClientRect().left;
        const halfWidth = event.currentTarget.clientWidth / 2

        if (clickedX < halfWidth) {
            setIndex((currentIndex - 1 + images.length) % images.length)
        } else {
            setIndex((currentIndex + 1) % images.length)
        }
    }

    return (
        <div className="gallery">
            <img className="img" src={currentImage} alt={""} onClick={handleClick}></img>
        </div>
    )
}