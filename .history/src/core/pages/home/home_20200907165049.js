import React from "react";
import "./home.css";

function Home () {
    return (
        <div>
            <section>
                <img src={require("../../../assets/images/portfolio.jpg")} alt="Not Found" />
                <button>Contact Me</button>
            </section>
        </div>
    );
}

export default Home;