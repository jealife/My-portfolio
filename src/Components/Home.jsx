import React from "react";
import '../Asset/Style/Main.css';
import About from "./About";
const Home = () => {
    return (
        <div className="home" transition-style="in:circle:top-right">
            <div className="home-hero" >
                <h1 data-aos="flip-left" >Home</h1>
            </div>
            <About/>
        </div>
    )
}

export default Home;