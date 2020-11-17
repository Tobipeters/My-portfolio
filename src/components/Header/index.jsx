import React from 'react';
import '../Header/header.style.css'
import MyPhoto from '../../assets/Tst.jpg'

const Header = () => {
    return (
        <header>
            <div className="container">
            <div className="row  d-flex align-items-center">
                <div className="col-md-6 py-5">
                    <h2>
                        Frontend<br />
                        Developer
                    </h2>
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
