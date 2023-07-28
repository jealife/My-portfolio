import React from "react";
import 'boxicons';
import "./Asset/Style/Responsive.css";
import "./Asset/Style/Main.css";
import 'transition-style';
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const App = () => {
  return (
      <>
      
      <Navigation />
      <Footer />

      </>

           
  );
};

export default App;


