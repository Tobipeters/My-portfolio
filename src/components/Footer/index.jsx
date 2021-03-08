import React from "react";
import "../Footer/footer-style.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaChevronUp
} from "react-icons/fa";
import ButtonPDF from "../../components/lib/buttonPDF";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container pt-5 position-relative">
        <div className="d-flex justify-content-center pt-5 position-relative">
          <a href="#home" className="upscroll">
            <FaChevronUp />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <p>Thanks for scrolling</p>
            <h6 className="font-weight-bold">Ask for my Availability!</h6>
          </div>
        </div>
        <div className="row pt-2 pb-1 mt-5 border-top ">
          <div className="col-md-4 order-3 order-md-1 d-flex justify-content-center  justify-content-lg-start ">
            <small className="font-weight-bold mt-3 mt-md-0">
              Tobi Peters 2020
            </small>
          </div>
          <div className="social-media col-md-4 col-6 order-1 d-flex justify-content-start justify-content-md-center">
            <a className=" text-white" href="https://github.com/Tobipeters">
              <FaGithub className="gh" />
            </a>
            <a className=" text-white" href="https://www.linkedin.com/in/otp/">
              <FaLinkedin className="ln" />
            </a>
            <a
              className=" text-white"
              href="https://twitter.com/Peters_tsticks"
            >
              <FaTwitter className="tw" />
            </a>
            <a className=" text-white" href="https://wa.me/2348167764664">
              <FaWhatsapp className="wh" />
            </a>
          </div>
          <div className="col-md-4 col-6 order-2 d-flex justify-content-end ">
            <ButtonPDF />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
