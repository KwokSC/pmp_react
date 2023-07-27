import "./SideBar.css"

export default function SideBar() {
    return (
        <div className="side-bar">
            <button className="dislike">&#10006;</button>
            <button className="like" >&#10004;</button>
        </div>
    )
}