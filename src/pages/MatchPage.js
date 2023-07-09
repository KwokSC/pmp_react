import { useState, useEffect, Fragment } from "react";
import "./MatchPage.css";
import api from "../requests/api";
import Loading from "../components/Main/Loading";
import MenuBar from "../components/Main/MenuBar";
import TinderCard from "react-tinder-card";
import Card from "../components/Match/Card";

export default function MatchPage() {
  const [loading, setLoading] = useState(true);
  const [matchList, setMatchList] = useState([
    { profileId: "dshad8914", profileName: "test1", profileBreed: "a", profileAge: "2", profileImages:["https://pmp-server-bucket.s3.ap-southeast-2.amazonaws.com/profile/user_3f4c532d-50fd-4f80-b488-ab15206cf512/photos/12abc874-6ebc-4165-b373-714c6dccb6b9.jpg"]},
    { profileId: "dad8sad4", profileName: "test2", profileBreed: "b", profileAge: "3", profileImages:[""] },
    { profileId: "da21474", profileName: "test3", profileBreed: "c", profileAge: "4", profileImages:[""] },
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
    api
      .post("/profile/updateLocation", location)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onSwipe(direction) {
    console.log("" + direction);
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      updateLocation(position.coords);
    });
    fetchMatch();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="match-container">
          <MenuBar />
          <div className="swiper">
            {matchList.map((match) => (
              <TinderCard
                key={match.profileId}
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                preventSwipe={["right", "left"]}
              >
                <Card profile={match}></Card>
              </TinderCard>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
