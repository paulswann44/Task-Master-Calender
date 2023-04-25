import React from "react";
import PropTypes from 'prop-types';

function Button({ label, onClick, type, className }) {

  const handleClick = (e) => {
    onClick();
  };
  const buttonClass = type === "primary" ? "btn btn-primary" :
                      type === "secondary" ? "btn btn-secondary" :
                      type === "success" ? "btn btn-success" :
                      type === "warning" ? "btn btn-warning" :
                      type === "danger" ? "btn btn-danger" : "";

  return (
    <button
      className={`${className} ${buttonClass}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger"]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;


