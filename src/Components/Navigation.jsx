import React from "react";
import '../Asset/Style/Navigation.css';
import { BrowserRouter as Router, Route, Routes,NavLink, Link } from "react-router-dom";
// import {HashLink as Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import logo from '../Asset/Images/code-alt-regular-48.png';

const Navigation = () => {
    return (
        <Router className="header">

            <nav className="nav">
                <div className="logo">
                    <Link className="link-item" to="/">
                        <img src={logo} className="logo" alt="Logo"/>
                    </Link>
                </div>
                <div className="menu">
                    <NavLink className="link-item" to="/">Home</NavLink>
                   <NavLink className="link-item" to="about">About</NavLink>
                    <NavLink className="link-item" to="/Portfolio">Portfolio</NavLink>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}
export default Navigation;
