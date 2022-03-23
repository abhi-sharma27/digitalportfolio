import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div className="header">
                <ul >
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/Skills">SKILLS</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                </ul>
            </div>
        );
    }


}

export default Header;