import React from "react";
import "../PortfolioCard/portfolio-card-style.css";

const PortfolioCard = props => {
  return (
    <div className="card text-center rounded-0 border-0 portfoilo-card">
      <a target="_blank" href={props.link} className="hover-cover">
        <div
          className="card-img"
          style={{ backgroundImage: "url(" + props.projectBg + ") " }}
        />
        <div className="view-project d-flex justify-content-center align-items-center">
          <span className="shadow-lg">View Project</span>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
