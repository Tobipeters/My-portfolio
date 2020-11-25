import React from 'react';
import '../PortfolioCard/portfolio-card-style.css'

const PortfolioCard = ( props ) => {
console.log(props)
// style={{ backgroundImage:`url(${props.projectBg})` }}
    return (
        <div className="card text-center rounded-0 border-0 portfoilo-card">
            <a href="#" className="hover-cover">
            <img src={props.projectBg} />
            <div className="view-project d-flex justify-content-center align-items-center">
                <span className="shadow-lg">
                View Project
                </span>
            </div>
            </a>
        </div> 
    );
}

export default PortfolioCard;
