import React from "react";
import "../Portfolio/portfolio.style.css";
import MyPhoto from "../../assets/Tst.jpg";
import SkillPhoto from "../../assets/skill-image.jpg";
import PortfolioCard from "../PortfolioCard/index";
import { MdDone } from "react-icons/md";
import { projects } from "../../helpers/projectList";

const Portfolio = () => {
  return (
    <>
      <section className="skill-section">
        <div className="container py-5">
          <div className="row py-5 about-row">
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end order-md-2">
              <div>
                <img
                  src={MyPhoto}
                  className="about-photo shadow-lg rounded mb-5 mb-md-0"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-self-center order-md-1">
              <div>
                <h3 className="section-title mb-4 purple-text">About Me</h3>
                <p className="text-break">
                  I am a frontend developer with passion for solving problems
                  and digitalizing abstract ideas - giving them structure and
                  making them automated
                  <br />I have worked and still works in a Tech startup. I
                  prefer <span className="font-weight-bold"> remote jobs.</span>
                  <br /> <br />
                  In my spare time, I chat and I hangout with friends.
                  <br />
                </p>
                <span className="font-weight-bold">
                  What should you know about me?
                </span>
                <ul className="list-group fun-list">
                  <li className="list-group-item py-1 border-0 pl-0 bg-transparent">
                    <MdDone className="pink-text mr-2" />I play the drums
                  </li>
                  <li className="list-group-item py-1 border-0 pl-0 bg-transparent">
                    <MdDone className="pink-text mr-2" />I love to cook ( don't
                    ask me to cook for you lol)
                  </li>
                  <li className="list-group-item py-1 border-0 pl-0 bg-transparent">
                    <MdDone className="pink-text mr-2 mb-3" />I have such great
                    eye for aesthetics especially as pertaining to PCs ( a sleek
                    PC motivates me to work)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 d-flex align-self-center">
              <div>
                <img
                  src={SkillPhoto}
                  className="skill-photo rounded mb-5 mb-md-0"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h3 className=" section-title purple-text mb-4">My Skills</h3>
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
      <section className="portfolio-section" id="portfolio">
        <div className="container py-5">
          <h3 className="section-title text-white mt-5">My Works</h3>
          <div className="row mx-0 py-5">
            {projects.map(({ title, image, link }, index) => {
              return (
                <div className="col-lg-4 col-md-6 p-0" key={index}>
                  <PortfolioCard title={title} projectBg={image} link={link} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
