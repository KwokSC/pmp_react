import "./InputArea.css"

export default function InputArea({title, placeholder}) {
    return (
        <div className="profile-input-area">
            <h2>{title}</h2>
            <input placeholder={placeholder}></input>
        </div>
    )
}