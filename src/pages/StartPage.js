import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputArea from "../components/Profile/InputArea";
import PhotoUploader from "../components/Profile/PhotoUploader";
import "./StartPage.css";
import api from "../requests/api";

export default function StartPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [breed, setBreed] = useState("");

  const pages = [
    {
      title: "Page 1",
      content: (
        <PhotoUploader
          uploadedPhotos={uploadedPhotos}
          setUploadedPhotos={setUploadedPhotos}
        />
      ),
    },
    {
      title: "Page 2",
      content: (
        <>
          <InputArea
            title="My Name is..."
            placeholder="Name"
            param={name}
            setParam={setName}
          />
          <InputArea title="I am a" placeholder="Breed" />
        </>
      ),
    },
    { title: "Page 3" },
  ];

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // try {
    //   // Call the uploadPhotos function to send the uploadedPhotos list to the backend
    //   const response = uploadPhotos(uploadedPhotos);
    //   // Handle the response from the backend, if needed
    //   console.log("Response from backend:", response);
    // } catch (error) {
    //   // Handle errors
    //   console.error("Error uploading photos:", error);
    // }
  }

  // function uploadPhotos(photos) {
  //   try {
  //     const response = api.post("/profile/uploadPhotos", {
  //       params:{
  //         photos: photos
  //       }
  //     }, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     return response.data.data;
  //   } catch (error) {
  //     throw new Error("Error uploading photos:", error);
  //   }
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div className="welcome-bar">
        <h1>Welcome</h1>
        <p>Let's start with your profile!</p>
      </div>
      <div className="container">
        {pages[currentPage].content}
        <div className="page-bar">
          {currentPage > 0 && (
            <button onClick={handlePreviousPage}>Previous</button>
          )}
          {currentPage < pages.length - 1 ? (
            <button onClick={handleNextPage}>Next</button>
          ) : (
            <button onClick={() => console.log("Submit Form")}>Submit</button>
          )}
        </div>
        <Link className="skip" to="/match">
          Skip personalization
        </Link>
      </div>
    </form>
  );
}
