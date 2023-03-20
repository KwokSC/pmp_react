import { useState, useEffect, Fragment } from "react"
import "./MatchPage.css"
import api from "../requests/api"
import Card from "../components/Match/Card"
import Loading from "../components/Main/Loading"

export default function MatchPage() {

    const [loading, setLoading] = useState(true)
    const [match, setMatch] = useState([])
    const [userLocation, setUserLocation] = useState({ latitude: undefined, longitude: undefined })

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setUserLocation({ latitude, longitude })
    })

    function fetchMatch() {
        api.get('/match/getMatch')
            .then((response) => {
                setLoading(false)
                setMatch(response.data.data)
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
                <Card match={match} />
            </div>}
    </Fragment>

    )
}