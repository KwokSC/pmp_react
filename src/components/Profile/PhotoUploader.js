import "./PhotoUploader.css"

export default function PhotoUploader({ uploadedPhotos, setUploadedPhotos }) {

    const handleFileSelect = (event, slotIndex) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (event) {
            // Shallow copy the current uploadedPhotos array
            const newUploadedPhotos = [...uploadedPhotos];

            // Set the new uploaded photo to the first empty slot
            newUploadedPhotos[slotIndex] = event.target.result;
            setUploadedPhotos(newUploadedPhotos);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="photo-uploader">
            <h2>Please add at least one photo</h2>
            <div className="grid">
                {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="upload-slot">
                        {uploadedPhotos[index] ? (
                            <img src={uploadedPhotos[index]} alt={`Photo ${index + 1}`} />
                        ) : (
                            <button
                                className="upload-button"
                                onClick={() => document.getElementById(`file-input-${index}`).click()}>
                                &#43;
                                <input
                                    id={`file-input-${index}`}
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => handleFileSelect(event, index)}
                                    style={{ display: 'none' }}
                                />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );

}