import React from "react";
import PropTypes from 'prop-types';

function Input (props){
    const {type, label, value, onChange, placeholder}= props;
    return(
        <label htmlFor={label}>
            <input 
            type={type}
            id={value}
            label={value}
            onChange={onChange}
            placeholder={placeholder}
            />
        </label>
    )
};

Input.propTypes ={
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
}


export default Input;