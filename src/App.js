import "./App.css"
import MenuBar from "./components/Main/MenuBar"
import MatchPage from "./pages/MatchPage"
import LoginPage from "./pages/LoginPage"
import StartPage from "./pages/StartPage"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom"
import { useEffect } from "react";
import { isAuthenticated } from "./components/Login/auth";

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(isAuthenticated + "")
      navigate("/login")
    }
  }, [navigate])

  return (<>
    <MenuBar />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/match" element={<MatchPage />}>
        <Route path=":id" element={<ProfilePage />} />
      </Route>
      <Route path="/start" element={<StartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
  )
}

export default App;