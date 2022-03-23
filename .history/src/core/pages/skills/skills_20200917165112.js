import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
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
                <div>
                    <SiCss3 className="size"/>
                    <p className="skill-heading">CSS</p>
                </div>
                <div>
                    <DiJavascript className="size"/>
                    <p className="skill-heading">JavaScript</p>
                </div>
                <div>
                    <DiGit className="size"/>  
                    <p className="skill-heading">Git</p>
                </div>
                <div>
                    <DiPhotoshop className="size"/>
                    <p className="skill-heading">Photoshop</p>
                </div>                
                <div>
                   <RiReactjsFill className="size"/>
                   <p className="skill-heading">ReactJs</p>
                </div>
                
            </div>
        </section>
    );
}

export default Skills;