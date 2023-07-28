import { useState } from "react";
import "./PhotoUploader.css"

export default function PhotoUploader({uploadedPhotos, setUploadedPhotos}) {

    const handleFileSelect = (event, slotIndex) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const newUploadedPhotos = [...uploadedPhotos];
            newUploadedPhotos[slotIndex] = event.target.result;
            setUploadedPhotos(newUploadedPhotos);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="photo-uploader">
            <h2>Please add at least 3 photos</h2>
            <div className="grid">
                {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="upload-slot">
                        {uploadedPhotos[index] ? (
                            <img src={uploadedPhotos[index]} alt={{ index }} />
                        ) : (
                            <>
                                <label htmlFor={`fileInput${index}`}>&#43;</label>
                                <input
                                    type="file"
                                    id={`fileInput${index}`}
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFileSelect(e, index)}
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );

}