import React from "react";
import "../Asset/Style/Main.css";
import "../Asset/Style/Responsive.css";
import "../Asset/Style/Footer.css";

const Home = () => {
  return (
    <footer className="footer">
    <div className="footer-container sectionntainer">

        <div className="footer-logo"><box-icon color='#f87020' name='code'></box-icon></div>
        <div className="socials ">
            <a href="mailto:jealife.pictures@gmail.com"><box-icon color='#808080' size='md' name='envelope'></box-icon></a>
            <a href="http://instagram.com/jealife_pictures"><box-icon color='#808080' size='md' type='logo' name='instagram-alt' ></box-icon></a>
            <a href="https://github.com/jealife"><box-icon color='#808080' size='md' type='logo' name='github'></box-icon></a>

        </div>

        <div className="copy-right">&copy; Jean Guylane, 2023.</div>

    </div>
</footer>
  );
};

export default Home;
