import { useState } from "react";
import "../styles/buttonSettings.css";
import settingsImg from "../assets/img/settings.png";

export default function ButtonSettings() {
  const [rotating, setRotating] = useState(false);

  function animacionRotar() {
    if (!rotating) {
      setRotating(true);
      setTimeout(() => {
        setRotating(false);
      }, 400);
    }
  }

  return (
    <button className="settings-btn" onClick={animacionRotar}>
      <img
        src={settingsImg}
        alt="Settings"
        className={rotating ? "rotate-animated" : "rotate-instant"}
      />
    </button>
  );
}
