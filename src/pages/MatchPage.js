import { useState, useEffect, Fragment } from "react";
import "./MatchPage.css";
import api from "../requests/api";
import Loading from "../components/Main/Loading";
import MenuBar from "../components/Main/MenuBar";
import TinderCard from "react-tinder-card";
import Overview from "../components/Match/Overview";
import SideBar from "../components/Match/Sidebar";
import Gallery from "../components/Match/Gallery";

export default function MatchPage() {
  const [loading, setLoading] = useState(true);
  const [matchList, setMatchList] = useState([
    {
      profileId: "da21474", profileName: "FACAI", profileBreed: "Chinchilla", profileAge: "2",
      profileImages: [
        "https://pmp-server-bucket.s3.ap-southeast-2.amazonaws.com/profile/user_3f4c532d-50fd-4f80-b488-ab15206cf512/photos/QQ%E5%9B%BE%E7%89%8720230716001508.jpg",
        "https://pmp-server-bucket.s3.ap-southeast-2.amazonaws.com/profile/user_3f4c532d-50fd-4f80-b488-ab15206cf512/photos/QQ%E5%9B%BE%E7%89%8720230716001518.jpg"
      ]
    },
    {
      profileId: "dshad8914", profileName: "PIPI", profileBreed: "Rag Doll", profileAge: "5",
      profileImages: [
        "https://pmp-server-bucket.s3.ap-southeast-2.amazonaws.com/profile/user_0fb419b5-ed60-4eab-be20-65fae8829940/photos/12abc874-6ebc-4165-b373-714c6dccb6b9.jpg",
        "https://pmp-server-bucket.s3.ap-southeast-2.amazonaws.com/profile/user_0fb419b5-ed60-4eab-be20-65fae8829940/photos/cddb742a-4ea6-497a-b627-e84ab7003877.jpg",
        "https://pmp-server-bucket.s3.ap-southeast-2.amazonaws.com/profile/user_0fb419b5-ed60-4eab-be20-65fae8829940/photos/QQ%E5%9B%BE%E7%89%8720230716001513.jpg"]
    },
  ]);

  function fetchMatch() {
    api
      .get("/match/getMatch")
      .then((response) => {
        setLoading(false);
        if (response.data.data.length !== 0) {
          setMatchList(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateLocation(location) {
    
    const latitude = location.latitude
    const longitude = location.longitude

    api
      .get("/profile/updateLocation",  {
        params: {
            latitude: latitude,
            longitude: longitude
        }
    })
      .then(

      )
      .catch((error) => {
        console.log(error);
      });
  }

  function onSwipe(direction) {

  }

  const onCardLeftScreen = (match) => {

  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      updateLocation(position.coords);
    });
  }, []);

  useEffect(() => {
    if (matchList.length === 0) {
      setLoading(true)
      fetchMatch();
    } else {
      setLoading(false)
    }
  }, [matchList.length])

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MenuBar />
          <div className="swiper">
            <SideBar />
            {matchList.map((match) => (
              <TinderCard
                className="card"
                key={match.profileId}
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen(match)}
                preventSwipe={["top", "bottom"]}
              >
                <Gallery images={match.profileImages} />
                <Overview name={match.profileName} breed={match.profileBreed} age={match.profileAge} />
              </TinderCard>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
