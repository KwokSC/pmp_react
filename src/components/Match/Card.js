import { useOutletContext, useParams } from "react-router-dom"

export default function Card({ profile }) {

    const { id } = useParams()
    const obj = useOutletContext()

    return (
        <div className="card">

        </div>
    )

}