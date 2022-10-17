import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import emailjs from "emailjs-com";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(true);
  const [message, setMessage] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6mzlii",
        "template_50gbna9",
        form.current,
        "Nf2P8SzBQRXO5nBzd"
      )
      .then(
        (result) => {
          setShowPopup(false);
          setMessage("Mail Sent Successfully!");
          console.log("sent");
        },
        (error) => {
          setShowPopup(false);
          setMessage("Unable to send Mail");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>osanyinlokunoladiipo@gmail.com</h5>
            <a
              target="blank"
              rel="noreferer"
              href="mailto:osanyinlokunoladiipo@gmail.com"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              target="blank"
              rel="noreferer"
              href="https://api.whatsapp.com/send?phone=2348161888116&text=Hello"
            >
              Chat me up
            </a>
          </article>
          <article className="contact__option">
            <FaTwitterSquare className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>OladiipoErnest</h5>
            <a
              target="blank"
              rel="noreferer"
              href="https://twitter.com/OladiipoErnest"
            >
              Reach me on twitter
            </a>
          </article>
        </div>
        {/* Form */}
        {/* Come back to this and useEffect */}
        <Popup
          disabled={showPopup}
          position="right center"
          onClose={() => {
            setShowPopup(false);
            setMessage("");
          }}
        >
          <div>{message}</div>
        </Popup>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
