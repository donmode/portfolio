import React from "react";
import "./portfolio.css";
import LADMUS from "../../assets/ladmus.png";
import PMS from "../../assets/pms.png";
import PETUNIA from "../../assets/petunia.png";
import PDFFLIP from "../../assets/pdfflip.jpeg";
import GRADING from "../../assets/Grading.png";
import QUORALEN from "../../assets/quoralen.png";

const data = [
  {
    id: 1,
    image: QUORALEN,
    title: "The Quora Data Processing App",
    github: "https://github.com/donmode",
    demo: "https://answerandearn.net",
  },
  {
    id: 2,
    image: LADMUS,
    title: "LADMUS Energy Website",
    github: "https://github.com/donmode",
    demo: "https://ladmus.com",
  },
  {
    id: 3,
    image: PETUNIA,
    title: "Petunia BAME Website",
    github: "https://github.com/donmode",
    demo: "https://petuniathomas.com",
  },
  {
    id: 4,
    image: PDFFLIP,
    title: "PDF FLIPPING APP",
    github: "https://github.com/donmode",
    demo: "https://oladiipoernest.com",
  },
  {
    id: 5,
    image: GRADING,
    title: "The Grading App",
    github: "https://github.com/donmode",
    demo: "https://oladiipoernest.com",
  },
  {
    id: 6,
    image: PMS,
    title: "The Project Management System App",
    github: "https://github.com/donmode",
    demo: "https://oladiipoernest.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary inactive"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
