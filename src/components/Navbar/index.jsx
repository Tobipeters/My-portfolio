import React, {useState} from 'react';
import '../Navbar/navbar.style.css'

const Nav = () => {
    const [slideNav, setslideNav] = useState("")
    const [isSlide, setisSlide] = useState(false);

    const slideMenu = () =>{
        if (isSlide) {
         setslideNav("slide-in-out")
         setisSlide(false)
        }
        else{
            setslideNav("")
            setisSlide(true)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light position-relative">
            <div className="container">
                <a className="navbar-brand logo" href="#">
                    <span>
                    Tobi.Peters
                    </span>
                </a>
                <button className="navbar-toggler pr-0 border-0" type="button" onClick={slideMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={` slide-menu ${slideNav}`}>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item mx-auto active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-auto">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item mx-auto">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item mx-auto px-lg-2">
                            <button className="btn btn-primary">PDF CV</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
