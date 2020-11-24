import React from 'react';
import '../PortfolioCard/portfolio-card-style.css'

const PortfolioCard = ({ props }) => {

    const bgStyle = {
        backgroundImage: props.background
    }
    return (
        <div className="card portfoilo-card" style={bgStyle}>

        </div>
    );
}

export default PortfolioCard;
