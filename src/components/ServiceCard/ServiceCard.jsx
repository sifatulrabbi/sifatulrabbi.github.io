import React from 'react';
import './serviceCard.scss';

const ServiceCard = ({ title, desc, icon }) => {
    return (
        <div className="serviceCard">
            <div className="serviceCard_icon">{icon}</div>
            <div className="serviceCard_text">
                <span className="serviceCard_caption">{title}</span>
                <p className="desc">{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
