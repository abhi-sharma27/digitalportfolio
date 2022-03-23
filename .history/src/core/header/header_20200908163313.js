import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <ul >
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Skills">SKILLS</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
                {console.log(window.location.pathname)}
            </ul>
        </div>
    );
}

export default Header;