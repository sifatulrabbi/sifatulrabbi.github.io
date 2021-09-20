import React from 'react';
import './myServices.scss';
import ServiceCard from '../ServiceCard/ServiceCard';
import data from './data';

const MyServices = () => {
    return (
        <section className="myServices">
            <div className="myServices_header">
                <span className="myServices_caption">My Services and Skills</span>
                <h2 className="myServices_heading">
                    Lorem ipsum dolor sit amet
                    <span className="colored"> consecutor lorem</span> ipsum dolor ametsu
                </h2>
            </div>
            <div className="myServices_cards">
                {data.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        desc={service.desc}
                        icon={service.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default MyServices;
