import "../styles/buttonNav.css";

import flechaImg from "../assets/img/flecha.png";

export default function ButtonNav({ text, onClick, withArrow }) {
  return (
    <div className="cont-btn-nav" onClick={onClick}>
      <button className="btn-nav">{text}</button>
      {withArrow && <img src={flechaImg} alt="" className="arrow-btn-nav" />}
    </div>
  );
}
