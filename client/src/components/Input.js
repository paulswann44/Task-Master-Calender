import React, { useRef } from "react";
import PropTypes from 'prop-types';

function Input(props) {
  const { type, label, value, onChange, placeholder } = props;

  // 
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <label htmlFor={label}>
      <input
        type={type}
        id={value}
        ref={inputRef}
        // access the DOM element of input to be null
        onChange={onChange}
        onClick={handleFocus}
        placeholder={placeholder}
      />
    </label>
  )
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default Input;
