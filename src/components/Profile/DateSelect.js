export default function DateSelect({title, selected, setSelected }) {

    function handleDateChange(event) {
        setSelected(event.target.value)
    }

    return (
        <div className="profile-input-area">
            <h2>{title}</h2>
            <input
                type="date"
                value={selected}
                onChange={handleDateChange} />
        </div>
    )
}