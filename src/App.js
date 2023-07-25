import "./App.css"
import MatchPage from "./pages/MatchPage"
import LoginPage from "./pages/LoginPage"
import StartPage from "./pages/StartPage"
import ProfilePage from "./pages/ProfilePage"
import SettingPage from "./pages/SettingPage"
import ChatPage from "./pages/ChatPage"
import NotFoundPage from "./pages/NotFoundPage"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { isAuthenticated } from "./components/Login/auth";
import EditPage from "./pages/EditPage"

function App() {

  const navigate = useNavigate()
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(isAuthenticated)
    if (isLoggedIn) {
      navigate("/match")
    }
  }, [])

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App;