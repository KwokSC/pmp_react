import { Fragment } from "react"
import "./Loading.css"

export default function Loading() {
    return (<Fragment>
        <div className="loading-container">
            <div className="loading-spinner" />
            <h1>Matching with other pets...</h1>
        </div>
    </Fragment>
    )
}