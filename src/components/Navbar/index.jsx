import React, { useState, useEffect } from "react";
import "../Navbar/navbar.style.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ButtonPDF from "../../components/lib/buttonPDF";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const Nav = () => {
  const [isDark, setIsDark] = useState(false);
  const [slideNav, setslideNav] = useState("");
  const [isSlide, setisSlide] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.remove("dark_mode");
    }
  }, [isDark]);

  const slideMenu = () => {
    if (isSlide) {
      setslideNav("slide-in-out");
      setisSlide(false);
    } else {
      setslideNav("");
      setisSlide(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand logo" href="#home">
          <span id="home">Tobi.Peter</span>
        </a>

        {/* For mobile only */}
        <div className="ms-auto align-items-center mobile-icon">
          <Toggle
            className="dark-mode-toggle mr-2"
            checked={isDark}
            onChange={({ target }) => setIsDark(target.checked)}
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode toggle"
          />

          <button
            className="c pr-0 border-0 bg-transparent btn-mob"
            type="button"
            onClick={slideMenu}
          >
            {slideNav === "slide-in-out" ? (
              <AiOutlineClose className="navbar-toggler-icon" />
            ) : (
              <AiOutlineMenu className="navbar-toggler-icon" />
            )}
          </button>
        </div>

        <div className={` slide-menu ${slideNav}`}>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item px-lg-3 mx-auto active">
              <a className="nav-link" href="#" onClick={slideMenu}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-lg-3 mx-auto">
              <a className="nav-link" href="#portfolio" onClick={slideMenu}>
                Portfolio
              </a>
            </li>
            <li className="nav-item px-lg-3 mx-auto">
              <a className="nav-link" href="#" onClick={slideMenu}>
                Contact
              </a>
            </li>
            <li
              className="nav-item px-lg-3 mx-auto px-lg-2"
              onClick={slideMenu}
            >
              <ButtonPDF />
            </li>
            <li className="nav-item px-lg-3s ml-lg-3 my-auto">
              <Toggle
                className="dark-mode-toggle d-none d-lg-inline-block"
                checked={isDark}
                onChange={({ target }) => setIsDark(target.checked)}
                icons={{ checked: "🌙", unchecked: "🔆" }}
                aria-label="Dark mode toggle"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
