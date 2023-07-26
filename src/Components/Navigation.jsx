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
import logo from "../Asset/Images/code-alt-regular-48.png";

const Navigation = () => {
  return (
    <Router classNameName="header">
      <nav className="nav">
        <div className="nav-menu">
          <NavLink className="link-item" to="/">
            Home
          </NavLink>
          <NavLink className="link-item" to="about">
            About</NavLink>
          <div className="nav-logo">
            <Link className="link-item" to="/">
              <img src={logo} className="logo" alt="Logo" />
            </Link>
          </div>
          <NavLink className="link-item" to="/Portfolio">
            Work
          </NavLink>
          <NavLink className="link-item" to="/Contact">
            Contact
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
export default Navigation;
