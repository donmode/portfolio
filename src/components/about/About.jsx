import React from "react";
import "./about.css";
import ME from "../../assets/about-image.jpg";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>60+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            I am a goal-oriented Software Engineer with strong commitment to
            solving problems using best-fit technologies and tools. When I'm not
            coding, I'm probably listening to music or admiring nature!
            <br />
            <br />
            <small>
              🎈🎈🎈 Fun Fact: I enjoy writing poetry, and I have a published
              collection of poems written in{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://okadabooks.com/book/about/detail/39655"
                title="Link to Iwe-Kobo by Osanyinlokun Oladiipo Ernest"
              >
                my mother's tongue (Yoruba Language)
              </a>
            </small>
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
