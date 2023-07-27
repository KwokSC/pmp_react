import "./Overview.css"

export default function Overview({ name, breed, age }) {

    return (
        <div className="overview">
            <h2>{name}</h2>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
        </div>
    )
}