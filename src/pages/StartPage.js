import { useEffect, useState } from "react";
import InputArea from "../components/Profile/InputArea";
import PhotoUploader from "../components/Profile/PhotoUploader";
import "./StartPage.css";
import { Link } from "react-router-dom";

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
    event.preventDefault()
  }

  function uploadPhotos(){
    
  }

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
        <Link className="skip" to="/match">Skip personalization</Link>
      </div>
    </form>
  );
}
