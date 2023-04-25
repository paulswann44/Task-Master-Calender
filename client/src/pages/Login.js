import React from "react";
import Button from "../components/Button";

function Login(){
    return (
        <div className="login-container">
            <form>

        {/* USERNAME () */}
        <label htmlFor="username">Username:</label>
        <input 
        id="firstName" 
        type="text" 
        placeholder="Enter Username" 
        />

         {/* PASSWORD */}
        <label htmlFor="password">Password:</label>
        <input 
        id="password" 
        type="password" 
        placeholder="Enter Password" 
        />

        {/* REMEMBER ME BUTTON */}
         <input type="checkbox" value="lsRememberMe" id="rememberMe"/> 
         <label htmlFor="rememberMe">Remember me</label>

        
            </form>

            
            <Button label="Login"></Button>
             
        </div>
    )
}

export default Login;
