import { useState } from "react";

function Gallery({images}){

    const [currentIndex, setIndex] = useState(0)

    function handleClick(event){
        const clickedX = event.pageX - event.currentTarget.getBoundingClientRect().left;
        const halfWidth = event.currentTarget.clientWidth / 2

        if(clickedX < halfWidth){
            setIndex((currentIndex - 1 + images.length) % images.length)   
        } else{
            setIndex((currentIndex + 1)% images.length)
        }
    }

    return (
        <div>
            {images.map((image, index)=>{
                <img key={index} src={image} onClick={handleClick}></img>
            })}
        </div>
    )
}