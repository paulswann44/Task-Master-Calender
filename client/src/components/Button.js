import React from "react";
import PropTypes from 'prop-types';

function Button({ label, onClick, disabled, className }) {

  const handleClick = (e) => {
    onClick();
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  className: '',
};

export default Button;