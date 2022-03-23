import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";

function Skills () {
    return (
        <section>
            <div>
                <FaHtml5 />
                <SiCss3 />
                <DiJavascript />
                <DiGit />
                <DiPhotoshop />
                <RiReactjsFill />
            </div>
        </section>
    );
}

export default Skills;