import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/nav.css";

import flechaImg from "../assets/img/flecha.png";

export default function ButtonNav({
  text,
  to,
  onClick,
  withArrow,
  dropdownContent,
  dropdownId,
  isOpen,
  onTriggerClick,
  onMouseEnter,
  onMouseLeave,
}) {
  const isControlledDropdown = withArrow && dropdownId != null;
  const open = isControlledDropdown ? isOpen : false;

  const handleClick = () => {
    if (withArrow) {
      if (onTriggerClick) {
        onTriggerClick();
      }
    } else if (onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (withArrow && onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if (withArrow && onMouseLeave) {
      onMouseLeave();
    }
  };

  const triggerClasses = `btn-nav ${open ? "dropdown-open" : ""}`;

  return (
    <div
      className={`button-nav-wrapper ${open ? "dropdown-active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={to || "#"} className={triggerClasses} onClick={handleClick}>
        <span>{text}</span>
        {withArrow && (
          <img
            src={flechaImg}
            alt=""
            className={`arrow-btn-nav ${open ? "arrow-rotated" : ""}`}
          />
        )}
      </Link>
      {withArrow && dropdownContent && (
        <div className={`dropdown-content ${open ? "dropdown-open" : ""}`}>
          <div className="dropdown-inner">{dropdownContent}</div>
        </div>
      )}
    </div>
  );
}

ButtonNav.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  withArrow: PropTypes.bool,
  dropdownContent: PropTypes.node,
  dropdownId: PropTypes.string,
  isOpen: PropTypes.bool,
  onTriggerClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
