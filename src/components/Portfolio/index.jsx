import React from 'react';
import '../Portfolio/portfolio.style.css'
import MyPhoto from '../../assets/Tst.jpg'
import SkillPhoto from '../../assets/skill-image.jpg'
import PortfolioCard from '../PortfolioCard/index'

const Portfolio = () => {
    return (
        <>
            <section className="skill-section">
                <div className="container py-5">
                    <div className="row py-5 about-row">
                        <div className="col-md-6 d-flex justify-content-center justify-content-md-end order-md-2">
                            <div>
                                <img src={MyPhoto} className="about-photo shadow-lg rounded mb-5 mb-md-0" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-self-center order-md-1">
                            <div>
                                <h3 className="mb-4 purple-text">About Me</h3>
                                <p>
                                    Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.
                                <br /> <br />
                                    Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.
                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-md-6 d-flex align-self-center">
                            <div>
                                <img src={SkillPhoto} className="skill-photo rounded mb-5 mb-md-0" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="purple-text mb-4">My Skills</h3>
                            <div className="row py-5">
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        HTML
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        CSS
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        JavaScript
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        React
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        Angular
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        GraphQL
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        Bootstrap
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <div className="card-body top-border rounded shadow text-center font-weight-bold mb-4">
                                        Git
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="porfolio-section">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-xl-3 col-md-3">
                           <PortfolioCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;