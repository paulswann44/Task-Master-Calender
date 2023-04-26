import React from "react";
import Button from "../components/Button";

function Register() {

  const handleClick = () => {
    // todo: this will be an axios http request to backend spring boot 
    alert("Congrats it works");
  }

  return (
    <div className="registration-Container">
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input 
        id="firstName" 
        type="text" 
        placeholder="First Name" 
        />

        <label htmlFor="lastName"> Last Name</label>
        <input 
        id="lastName" 
        type="text" 
        placeholder="Last Name" 
        />


        <label htmlFor="email">Email</label>
        <input 
        id="email" 
        type="email" 
        placeholder="email@example.com" 
        />
        
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="password" />
        <label htmlFor="verifyPassword">Verify Password</label>
        <input id="verifyPassword" type="text" placeholder="password" />
        <Button type="primary" label="Sign-up" onClick={handleClick} />
      </form>
    </div>
  )
}

export default Register;