import React from "react";
import "./home.css";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Home() {
    return (
        <div className="flex1">
            <div className="flex">
                <section className="section-img">
                    <img src={require("../../../assets/images/portfolio.jpg")} alt="Not Found" />
                    <button>Contact Me</button>
                </section>
                <section className="info">
                    <h1>HI, I'M <div className="adjustPadding">ABHI SHARMA</div></h1>
                    <p className="h3">Web Developer</p>
                    <p><FaGithub className="homeIcons"/> abhi-sharma27</p>
                    <p><MdMail className="homeIcons"/> abhipurika@gmail.com</p>
                </section>
            </div>
        </div>
    );
}

export default Home;