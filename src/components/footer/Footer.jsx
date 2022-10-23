import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="https://oladiipoernest.com" className="footer__logo">
        Oladiipo Ernest
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/oladipupoosanyinlokun"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="http://instagram.com/kingdonmode"
          target="_blank"
          rel="noreferrer"
        >
          <SiInstagram />
        </a>
        <a
          href="http://twitter.com/oladiipoernest"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Oladiipo Ernest. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
