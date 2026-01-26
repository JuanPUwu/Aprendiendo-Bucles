import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/buttonNav.css";

import flechaImg from "../assets/img/flecha.png";

export default function ButtonNav({ text, onClick, withArrow, dropdownContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (withArrow) {
      setIsOpen(!isOpen);
    } else {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (withArrow) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (withArrow) {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className={`button-nav-wrapper ${isOpen ? 'dropdown-active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        type="button" 
        className={`cont-btn-nav btn-nav ${isOpen ? 'dropdown-open' : ''}`} 
        onClick={handleClick}
      >
        <span>{text}</span>
        {withArrow && (
          <img 
            src={flechaImg} 
            alt="" 
            className={`arrow-btn-nav ${isOpen ? 'arrow-rotated' : ''}`} 
          />
        )}
      </button>
      {withArrow && dropdownContent && (
        <div className={`dropdown-content ${isOpen ? 'dropdown-open' : ''}`}>
          <div className="dropdown-inner">
            {dropdownContent}
          </div>
        </div>
      )}
    </div>
  );
}

ButtonNav.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  withArrow: PropTypes.bool,
  dropdownContent: PropTypes.node,
};
