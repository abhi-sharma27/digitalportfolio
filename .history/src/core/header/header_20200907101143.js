import React from "react";
import "./header.css";

function Header () {
    return (
        <ul>
            <li><link to="/Home">Home</link></li>
            <li><link to="/Skills">Skills</link></li>
            <li><link to="/About">About</link></li>
        </ul>
    );
}

export default Header;