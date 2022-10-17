import React from "react";
import "./testimonials.css";
import PETUNIA from "../../assets/petunia-avatar.png";
import SHAZAIB from "../../assets/shazaib.jpg";
import ADAMS from "../../assets/adams.png";
import BADMUS from "../../assets/badmus.png";
// Importing Swiper
// import Swiper core and required modules
import {Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    image: PETUNIA,
    name: "Petunia Thomas",
    review: "I don't understand the technicalities of websites but Ernest certainly does. can solve the issues as required, and is quick to get working on solutions. Thanks!"
  },
  {
    id: 2,
    image: ADAMS,
    name: "Adams Adams",
    review: "He gets the work done once you are able to give him detailed description."
  },
  {
    id: 3,
    image: SHAZAIB,
    name: "Shazaib Ali",
    review: "Great Work, he is effecient and hard working. I appreciate his web deveolpment skills.!"
  },
  {
    id: 4,
    image: BADMUS,
    name: "Badmus Ademide",
    review: 'He handled our official website all the way from conception and idealization to its launch. All I can say is that "He is a raw talent!!"'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({id, image, name, review})=>{
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
        
      </Swiper>
    </section>
  );
};

export default Testimonial;
