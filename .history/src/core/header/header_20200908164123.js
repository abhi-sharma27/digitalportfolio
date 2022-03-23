import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {RouteComponentProps} from 'react-router-dom';
function Header(props: RouteComponentProps) {
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