import { useState } from "react";
import "./PhotoUploader.css"

export default function PhotoUploader(){

    const [uploadedPhotos, setUploadedPhotos] = useState([])

    const handleFileSelect = (event) => {
        const files = event.target.files;
        const newPhotos = [];
    
        for (const file of files) {
          const reader = new FileReader();
          reader.onload = function (event) {
            newPhotos.push(event.target.result);
            if (newPhotos.length === files.length) {
              setUploadedPhotos([...uploadedPhotos, ...newPhotos]);
            }
          };
          reader.readAsDataURL(file);
        }
      };
    
      return (
        <div className="grid">
          <input
            type="file"
            id="fileInput"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />
    
          {uploadedPhotos.map((imageUrl, index) => (
            <div
              key={index}
              className="upload-slot"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
          ))}
    
          <div
            className="upload-slot"
            onClick={() => document.getElementById('fileInput').click()}
          >
            +
          </div>
        </div>
      );

}