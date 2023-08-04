import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputArea from "../components/Profile/InputArea";
import PhotoUploader from "../components/Profile/PhotoUploader";
import SelectBox from "../components/Profile/SelectBox";
import DateSelect from "../components/Profile/DateSelect"
import { GENDER_LIST, SPECIES_LIST } from "../constants/constants";

import "./StartPage.css";
import api from "../requests/api";

export default function StartPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [uploadedPhotos, setUploadedPhotos] = useState([])
  const [profile_name, setName] = useState("")
  const [profile_breed, setBreed] = useState("")
  const [profile_species, setSpecies] = useState(null)
  const [profile_gender, setGender] = useState(null)
  const [profile_description, setDescription] = useState("")
  const [profile_age, setAge] = useState("")
  const [profile_birth, setBirth] = useState("")
  const navigate = useNavigate()

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
            param={profile_name}
            setParam={setName}
          />
          <InputArea
            title="Describe me like..."
            placeholder="Introduction"
            param={profile_description}
            setParam={setDescription} />
          <InputArea
            title="Now I am..."
            placeholder="Age"
            param={profile_age}
            setParam={setAge} />
          <SelectBox
            title="I am a"
            options={SPECIES_LIST}
            context="Select a species"
            selected={profile_species}
            setSelected={setSpecies} />
          <SelectBox
            title="I am a"
            options={GENDER_LIST}
            context="Select a gender"
            selected={profile_gender}
            setSelected={setGender} />
          <InputArea
            title="And my breed is..."
            placeholder="Breed"
            param={profile_breed}
            setParam={setBreed} />
        </>
      ),
    },
    {
      title: "Page 3",
      content: (<DateSelect
        title="My birthday is..."
        selected={profile_birth}
        setSelected={setBirth} />)
    },
  ];

  function handleNextPage(event) {
    event.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function handlePreviousPage(event) {
    event.preventDefault();
    setCurrentPage((prevPage) => prevPage - 1);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (currentPage === pages.length - 1) {
      try {
        // Start both upload processes concurrently
        const [photoUploadResult, profileUploadResult] = await Promise.all([
          uploadPhotos(uploadedPhotos),
          uploadProfile()
        ]);

        // Check response codes for both API calls
        if (photoUploadResult === 200 && profileUploadResult === 200) {
          // Both uploads were successful, navigate to "/match"
          navigate("/match");
        } else {
          // Handle errors here, display a message or take appropriate actions
          console.log("Failed to upload photos or profile");
        }
      } catch (error) {
        // Handle any other errors that may occur during API calls
        console.error("Error submitting form:", error);
      }
    }
  }

  function uploadProfile() {
    const profile = {
      profileName: profile_name,
      profileDescription: profile_description,
      profileBreed: profile_breed,
      profileSpecies: profile_species,
      profileGender: profile_gender,
      profileAge: profile_age,
      profileBirth: profile_birth
    }

    api.post("/profile/createProfile", profile)
      .then(response => {
        return response.data.code
      })
      .catch(error => {
        console.error("Error uploading profile:", error)
        return null
      })
  }

  function uploadPhotos(uploadedPhotos) {
    const photos = new FormData();
    uploadedPhotos.forEach((photo) => {
      photos.append("photos", photo);
    });

    api.post("/profile/uploadPhotos", photos, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        return response.data.code
      })
      .catch(error => {
        console.error("Error uploading photos:", error)
        return null
      });
  }

  return (
    <div>
      <div className="welcome-bar">
        <h1>Welcome</h1>
        <p>Let's start with your profile!</p>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        {pages[currentPage].content}
        <div className="bottom-bar">
          <div className="page-bar">
            {currentPage > 0 && (
              <button type="button" onClick={handlePreviousPage}>
                Previous
              </button>
            )}
            {currentPage < pages.length - 1 ? (
              <button type="button" onClick={handleNextPage}>
                Next
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </div>
          <Link className="skip" to="/match">
            Skip personalization
          </Link>
        </div>
      </form>
    </div>

  );
}
