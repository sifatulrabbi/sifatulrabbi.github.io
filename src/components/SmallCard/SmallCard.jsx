import React from 'react';
import './smallCard.scss';

const SmallCard = ({ active, title, text, icon }) => {
    return (
        <div className={`card ${active ? 'active' : 'inactive'}`}>
            <div className="card_icon">{icon}</div>
            <div className="card_desc">
                <h5 className="caption">{title}</h5>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SmallCard;
