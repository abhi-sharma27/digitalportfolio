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
                    <h1>HI, I'M <p>ABHI SHARMA</p></h1>
                    <h3>Web Developer</h3>
                    <p><FaGithub /> abhi-sharma27</p>
                    <p><MdMail /> abhipurika@gmail.com</p>
                </section>
            </div>
        </div>
    );
}

export default Home;