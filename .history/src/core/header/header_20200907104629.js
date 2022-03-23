import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header () {
    return (
        <ul class="header">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
    );
}

export default Header;