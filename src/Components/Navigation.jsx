import React from "react";
import '../Asset/Style/Navigation.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

const Navigation = () => {
    return (
        <Router>

            <nav className="nav">
                <div className="logo">
                </div>
                <div className="menu">
                    <Link className="link-item" to="/">Home</Link>
                   <Link className="link-item" to="/About">About</Link>
                    <Link className="link-item" to="/Portfolio">Portfolio</Link>
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
