import React from "react";

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
}
export default Input;