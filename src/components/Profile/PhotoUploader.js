import "./PhotoUploader.css";

export default function PhotoUploader({ uploadedPhotos, setUploadedPhotos }) {

  function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (event) {
      // Shallow copy the current uploadedPhotos array
      const newUploadedPhotos = [...uploadedPhotos]
      const emptySlotIndex = newUploadedPhotos.findIndex((photo) => !photo);

      if (emptySlotIndex !== -1) {
        // Set the new uploaded photo to the first empty slot
        newUploadedPhotos[emptySlotIndex] = event.target.result;
        setUploadedPhotos(newUploadedPhotos);
      }
    };
    reader.readAsDataURL(file);
  };

  function deletePhoto(slotIndex){
    const newUploadedPhotos = [...uploadedPhotos]
    newUploadedPhotos.splice(slotIndex, 1)
    setUploadedPhotos(newUploadedPhotos)
  }

  return (
    <div className="photo-uploader">
      <h2>Please add at least one photo</h2>
      <div className="grid">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index} className="upload-slot">
            {uploadedPhotos[index] ? (
              <div className="img-preview">
                <img src={uploadedPhotos[index]} alt={`Photo ${index + 1}`} />
                <button className="delete-button" onClick={deletePhoto.bind(null, index)}>&#10006;</button>
              </div>
            ) : (
              <button
                className="upload-button"
                onClick={() =>
                  document.getElementById(`file-input-${index}`).click()
                }
              >
                &#43;
                <input
                  id={`file-input-${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleFileSelect(event, index)}
                  style={{ display: "none" }}
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
