import "./InputArea.css";

export default function InputArea({ title, placeholder, param, setParam }) {
  return (
    <div className="profile-input-area">
      <h2>{title}</h2>
      <input
        placeholder={placeholder}
        value={param}
        onChange={(e) => setParam(e.target.value)}
      ></input>
    </div>
  );
}
