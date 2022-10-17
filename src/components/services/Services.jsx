import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* Web Design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>CMS creation with Wordpress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Engaging and Responsive landing creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Optimization Consultation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>General Web Design Consultation</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Based Backend Application Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Application Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fullstack (Backend + Frontend Application Creation)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Management and Optimization</p>
            </li>
          </ul>
        </article>
        {/* DevOPs Consultation */}
        <article className="service">
          <div className="service__head">
            <h3>DevOPs Consultaion</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic DevOps Services</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
