import React from "react";
import "../Asset/Style/Navigation.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
// import {HashLink as Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from "./Skills";
import logo from "../Asset/Images/code-alt-regular-48.png";

const Navigation = () => {
  return (
    <Router >
    <header>
      <nav class="nav container">
                <div className="logo">
                    <Link className="link-item" to="/"><img src={logo} className="logo" alt="Logo" /> </Link>
                </div>
                <div className="menu-icon none">
                    <box-icon name='menu-alt-right'></box-icon>
                </div>
                <div class="menu menu-dropdown menu-dropdown--fade-in none hide">
                    <NavLink className="link-item" to="/">Home</NavLink>
                    <NavLink className="link-item" to="about">About</NavLink>
                    <NavLink className="link-item" to="/Skills">Skills</NavLink>
                    <NavLink className="link-item" to="/Portfolio">Work</NavLink>
                    <NavLink className="link-item" to="/Contact">Contact</NavLink>
                </div>
            </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
export default Navigation;
