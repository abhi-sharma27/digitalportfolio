import React from "react";
import "./home.css";
import { FaGithub } from "react-icons/fa";

function Home () {
    return (
        <div>
            <section>
                <img src={require("../../../assets/images/portfolio.jpg")} alt="Not Found" />
                <button>Contact Me</button>
            </section>
            <section>
                <h1>HI, I'M ABHI SHARMA</h1>
                <h3>Web Developer</h3>
                <p><FaGithub /> </p>
            </section>
        </div>
    );
}

export default Home;