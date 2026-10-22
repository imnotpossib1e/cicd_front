import { useState } from "react";
import "./LabelText.css";

export default function LabelText({ text, name, initialValue }) {
  const [value, setValue] = useState(initialValue || "");
  return (
    <div className="LabelText">
      <label className="label">{text}</label>
      <input
        className={`${value == "" ? "input" : "input_disabled"}`}
        type={`${name === "pwd" ? "password" : "text"}`}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
