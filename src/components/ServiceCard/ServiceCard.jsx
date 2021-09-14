import React from 'react';

const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div className="service_card">
      <div className="service_card_icon">{icon}</div>
      <h3 className="service_card_title">{title}</h3>
      <p className="service_card_desc">{desc}</p>
    </div>
  );
};

export default ServiceCard;
