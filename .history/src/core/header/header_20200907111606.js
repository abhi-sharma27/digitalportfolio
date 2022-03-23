import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <ul >
                <li><Link to="/HOME">Home</Link></li>
                <li><Link to="/SKILLS">Skills</Link></li>
                <li><Link to="/ABOUT">About</Link></li>
            </ul>
        </div>
    );
}

export default Header;