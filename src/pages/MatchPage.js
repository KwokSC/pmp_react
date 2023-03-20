import { useState, useEffect, Fragment } from "react"
import "./MatchPage.css"
import api from "../requests/api"
import Card from "../components/Match/Card"
import Loading from "../components/Main/Loading"
import { Outlet } from "react-router-dom"

export default function MatchPage() {

    const [loading, setLoading] = useState(true)
    const [matchList, setMatchList] = useState([])
    const [userLocation, setUserLocation] = useState({ latitude: undefined, longitude: undefined })

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setUserLocation({ latitude, longitude })
    })

    function fetchMatch() {
        api.get('/match/getMatch')
            .then((response) => {
                setLoading(false)
                setMatchList(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchMatch()
    }, [])

    return (<Fragment>
        {loading ? <Loading /> :
            <div className="swiper">
                {matchList.map((match) => (
                    <Card index={match.profileId} profile={match} />
                ))}
            </div>}
        <Outlet context={{ hello: "world" }} />
    </Fragment>
    )
}