import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
// import ME from '../../assets/me.png'
import ME from "../../assets/oladiipo-img.png";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Oladiipo Osanyinlokun</h1>
        <h5 className="text-light">Software Engineer</h5>

        {/* The call to action Buttons */}
        <CTA />

        {/* My picture */}
        <div className="me">
          <img src={ME} alt="Osanyinlokun Oladiipo Ernest" />
        </div>

        {/* Scroll down Button */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        {/* Social Links */}
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
