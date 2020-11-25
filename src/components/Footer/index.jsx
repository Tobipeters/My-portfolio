import React from 'react'
import '../Footer/footer-style.css'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineDownload } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container pt-5">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <p>Thanks for scrolling</p>
                        <h6 className="font-weight-bold">
                            Ask for my Availability!
                        </h6>
                    </div>
                </div>
                <div className="pt-2 pb-1 mt-5 border-top d-flex justify-content-center">
                    <div className="col-md-4">
                    <small className="font-weight-bold">Tobi Peters 2020</small>
                    </div>
                    <div className="social-media col-md-4">
                        <a className=" text-white" href="https://github.com/Tobipeters">
                            <FaGithub className="gh" />
                        </a>
                        <a className=" text-white" href="https://www.linkedin.com/in/otp/">
                            <FaLinkedin className="ln" />
                        </a>
                        <a className=" text-white" href="https://twitter.com/Peters_tsticks">
                            <FaTwitter className="tw" />
                        </a>
                        <a className=" text-white" href="https://wa.me/2348167764664">
                            <FaWhatsapp className="wh" />
                        </a>
                    </div>
                    <div className="col-md-4">
                    <button className="btn pink-bg border-0">
                        <AiOutlineDownload className="mr-2" />
                        PDF CV
                    </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;