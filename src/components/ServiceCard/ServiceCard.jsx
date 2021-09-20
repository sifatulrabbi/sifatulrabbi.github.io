import React from 'react';

const ServiceCard = ({ title, desc, icon }) => {
    return (
        <div className="serviceCard">
            <div className="serviceCard_icon"></div>
            <div className="serviceCard_text">
                <span className="serviceCard_caption">Front-end development</span>
            </div>
        </div>
    );
};

export default ServiceCard;
