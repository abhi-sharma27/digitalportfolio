import React, {useState} from "react";
import "./home.css";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

let showForm = ()=> {
  console.log('showForm function called successfull after clicking on Contact Me Button');
}

function Home() {
  const [showForm, setCount] = useState(false);
    return (
        <div className="flex1">
            <div className="flex">
                <section className="section-img">
                    <img src={require("../../../assets/images/portfolio.jpg")} alt="Not Found" />
                    <button onClick={showForm()}>Contact Me</button>
                </section>
                <section className="info">
                    <h1>HI, I'M <div className="adjustPadding">ABHI SHARMA</div></h1>
                    <p className="h3">Front End Web Developer</p>
                    <a href="#" className="iconHeading "><FaGithub className="homeIcons"/> <p className="margin-0">abhi-sharma27</p></a>
                    <a href="#" className="iconHeading"><MdMail className="homeIcons"/> <p className="margin-0">abhipurika@gmail.com</p> </a>
                </section>
            </div>
        </div>
    );
}

export default Home;