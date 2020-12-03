import React, { useState } from 'react';
import '../Navbar/navbar.style.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineDownload } from 'react-icons/ai'

const Nav = () => {
    const [slideNav, setslideNav] = useState("")
    const [isSlide, setisSlide] = useState(false);
    const slideMenu = () => {
        if (isSlide) {
            setslideNav("slide-in-out")
            setisSlide(false)
        }
        else {
            setslideNav("")
            setisSlide(true)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light position-relative">
            <div className="container">
                <a className="navbar-brand logo" href="#">
                    <span id="home">
                        Tobi.Peter
                    </span>
                </a>
                <button className="c pr-0 border-0 bg-transparent btn-mob" type="button" onClick={slideMenu}>
                    {
                        slideNav === "slide-in-out" ? <AiOutlineClose className="navbar-toggler-icon" /> : <AiOutlineMenu className="navbar-toggler-icon" />
                    }
                </button>

                <div className={` slide-menu ${slideNav}`}>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item mx-auto active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-auto">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item mx-auto">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item mx-auto px-lg-2">
                            <a href="https://drive.google.com/file/d/1NZ62wwgP5esMmuWGgBBCjBLx7y2RtoM9/view?usp=sharing" target="_blank" className="btn pink-bg border-0">
                                <AiOutlineDownload className="mr-2" />
                                PDF CV
                                </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
