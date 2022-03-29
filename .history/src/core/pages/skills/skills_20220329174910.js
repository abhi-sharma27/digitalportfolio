import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";

function Skills() {
    return (
        <section>
            <div className="flexIcons">
                <div className="icon">
                    <FaHtml5 className="size" />
                    <p className="skill-heading">HTML</p>
                </div>
                <div className="icon">
                    <DiCss3 className="size"/>
                    <p className="skill-heading">CSS</p>
                </div>
                <div className="icon">
                    <DiJavascript className="size"/>
                    <p className="skill-heading">JavaScript</p>
                </div>
                <div className="icon">
                   <RiReactjsFill className="size"/>
                   <p className="skill-heading">ReactJs</p>
                </div>
                <div className="icon">
                    <DiGit className="size"/>  
                    <p className="skill-heading">Git</p>
                </div>
                <div className="icon">
                    <DiPhotoshop className="size"/>
                    <p className="skill-heading">Photoshop</p>
                </div>                
                
                
            </div>
        </section>
    );
}

export default Skills;