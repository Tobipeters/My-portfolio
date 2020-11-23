import React from 'react';
import '../Portfolio/portfolio.style.css'
import MyPhoto from '../../assets/Tst.jpg'

const Portfolio = () => {
    return (
        <div className="porfolio-section">
            <div className="container py-5">
                <div className="row py-5 about-row">
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end order-md-2">
                        <div>
                            <img src={MyPhoto} className="about-photo shadow-lg rounded mb-5 mb-md-0" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-self-center order-md-1">
                        <div>
                            <h3 className="mb-4">About Me</h3>
                            <p>
                                Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.
                                <br /> <br />
                                Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.
                    </p>
                        </div>
                    </div>
                </div>
                
                <div className="row py-5">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                        <h3 className="">My Skills</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;