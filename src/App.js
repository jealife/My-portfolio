import React from "react";

import 'transition-style';
import Navigation from "./Components/Navigation";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const App = () => {
  return (
      
      <Navigation />
           
  );
};

export default App;


