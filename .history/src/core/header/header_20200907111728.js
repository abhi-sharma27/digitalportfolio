import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <ul >
                <li><Link to="/Home">HOME</Link></li>
                <li><Link to="/Skills">SKILLS</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
            </ul>
        </div>
    );
}

export default Header;