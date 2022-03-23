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
            <div>
                <div>
                    <FaHtml5 />
                    <p>HTML</p>
                </div>
                <div>
                    <SiCss3 />
                    <p>CSS</p>
                </div>
                <div>
                    <DiJavascript />
                    <p></p>
                </div>
                
                <DiGit />
                <DiPhotoshop />
                <RiReactjsFill />
            </div>
        </section>
    );
}

export default Skills;