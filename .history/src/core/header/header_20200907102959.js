import React from "react";
import "./header.css";

function Header () {
    return (
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
    );
}

export default Header;