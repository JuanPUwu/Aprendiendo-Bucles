import "../styles/buttonNav.css";

import flechaImg from "../assets/img/flecha.png";

export default function ButtonNav({ text, onClick, withArrow }) {
  return (
    <button type="button" className="cont-btn-nav btn-nav" onClick={onClick}>
      <span>{text}</span>
      {withArrow && <img src={flechaImg} alt="" className="arrow-btn-nav" />}
    </button>
  );
}
