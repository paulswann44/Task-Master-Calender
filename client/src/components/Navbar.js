import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    {/* convert to NavLinks to reflex active */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {/* maybe use the replace Link attribute when the user signs-in */}
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;

// Auth:  Home, About, Calender, Profile
//unAuth: Home, About, Login, Register