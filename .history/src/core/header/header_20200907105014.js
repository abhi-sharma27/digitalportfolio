import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <ul >
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    );
}

export default Header;