import React, { useState } from 'react';
import '../Navbar/navbar.style.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineDownload } from 'react-icons/ai'
import { Document, Page } from 'react-pdf';
import Resume from '../../assets/Oluwatobi_Resume.pdf'

const Nav = () => {
    const [slideNav, setslideNav] = useState("")
    const [isSlide, setisSlide] = useState(false);
    // PDF doc state
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

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

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return (
        <nav className="navbar navbar-expand-lg navbar-light position-relative">
            <div className="container">
                <a className="navbar-brand logo" href="#">
                    <span id="home">
                        Tobi.Peters
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
                            <button className="btn pink-bg border-0">
                                <AiOutlineDownload className="mr-2" />
                                PDF CV
                                </button>
                            {/* <Document file="../../assets/Oluwatobi_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess} >
                                 <Page pageNumber={pageNumber} />
                            </Document>
                            <p>Page {pageNumber} of {numPages}</p> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
