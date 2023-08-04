export default function BreedSelect({ title, context, options, selected, setSelected }) {

    function handleSelectChange(e) {
        setSelected(e.target.value)
    }

    return (
        <div className="profile-input-area">
            <h2>{title}
            <select value={selected} onChange={handleSelectChange}>
                <option value="">
                    {context}
                </option>
                {options.map((species) => (
                    <option key={species} value={species}>
                        {species}
                    </option>
                ))}
            </select>
            </h2>
        </div>
    )
}