import React from 'react';
import '../Header/header.style.css'
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import MyPhoto from '../../assets/Tst.jpg'

const Header = () => {
    return (
        <header className=" d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 py-5 d-flex">
                        <div className="header-text mx-auto mx-md-0">
                            <div className="hello">
                                <span className="hello-text"> Hello</span>
                            </div>
                            <h2>I'm Oluwatobi Peters</h2>
                            <h4>A Frontend Developer</h4>
                            <div className="mt-4 mb-3">
                                <div className="mb-1">
                                    <FaEnvelope className="mr-3" />
                                    <small className="font-weight-normal">
                                        <a className="text-white" href="emailto:oluwatobipeterschem@gmail.com" >
                                            oluwatobipeterschem@gmail.com
                                        </a>
                                    </small>
                                </div>
                                <div className="mb-1">
                                    <FaPhoneAlt className="mr-3" />
                                    <small className="font-weight-normal">
                                        <a className="text-white" href="tel:+2348167764664" >
                                            +234 816 776 4664
                                        </a>
                                    </small>
                                </div>
                                <div className="mb-1">
                                    <FaMapMarkerAlt className="mr-3" />
                                    <small className="font-weight-normal">
                                        Lagos, Nigeria
                                    </small>
                                </div>
                            </div>
                            <div className="social-media">
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
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <img src={} height="300"  className="rounded-circle"/> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
