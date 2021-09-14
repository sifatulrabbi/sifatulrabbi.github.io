import React from 'react';
import Button from '../Button/Button';

const ServiceCard = ({ color, title, desc, icon }) => {
  return (
    <div className="service_card">
      <div className="service_card_icon">{icon}</div>
      <h3 className="service_card_title">{title}</h3>
      <p className="service_card_desc">{desc}</p>
      <div className="service_card_actions">
        <Button label="Get Started" text />
      </div>
    </div>
  );
};

export default ServiceCard;
