import "./Button.css";

export default function Button({ text, type, onClick }) {
  return (
    <button type={type} className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
}
