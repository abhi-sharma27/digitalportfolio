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
                    <p>HTML</p>
                </div>
                <div>
                    <SiCss3 />
                    <p>CSS</p>
                </div>
                <div>
                    <DiJavascript />
                    <p>JavaScript</p>
                </div>
                <div>
                    <DiGit />  
                    <p>Git</p>
                </div>
                <div>
                    <DiPhotoshop />
                    <p>Photoshop</p>
                </div>                
                <div>
                   <RiReactjsFill />
                   <p>ReactJs</p>
                </div>
                
            </div>
        </section>
    );
}

export default Skills;