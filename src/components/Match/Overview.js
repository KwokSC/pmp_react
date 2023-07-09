export default function Overview({name, breed, age}){
    
    return(
        <div className="overview">
            <h2>{name}</h2>
            <p>{breed}</p>
            <p>{age}</p>
        </div>
    )
}