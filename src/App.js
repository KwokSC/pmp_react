import "./App.css";
import MatchPage from "./pages/MatchPage";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import ProfilePage from "./pages/ProfilePage";
import SettingPage from "./pages/SettingPage";
import ChatPage from "./pages/ChatPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuthenticated } from "./components/Login/auth";
import EditPage from "./pages/EditPage";
import api from "./requests/api";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = isAuthenticated()

    if (isLoggedIn) {
      api
        .get("/profile/isNewUser")
        .then((response) => {
          const isNewUser = response.data.data;
          if (isNewUser) {
            navigate("/");
          } else {
            navigate("/match");
          }
        })
        .catch(console.error());
    } else {
      navigate("/")
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/match" element={<MatchPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/chat/:userId" element={<ChatPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
