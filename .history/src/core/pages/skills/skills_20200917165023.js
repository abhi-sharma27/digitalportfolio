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
                    <p>CSS</p>
                </div>
                <div>
                    <DiJavascript className="size"/>
                    <p>JavaScript</p>
                </div>
                <div>
                    <DiGit className="size"/>  
                    <p>Git</p>
                </div>
                <div>
                    <DiPhotoshop className="size"/>
                    <p>Photoshop</p>
                </div>                
                <div>
                   <RiReactjsFill className="size"/>
                   <p>ReactJs</p>
                </div>
                
            </div>
        </section>
    );
}

export default Skills;