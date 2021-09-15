import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Title from '../Title/Title';
import data from './data';

const MyServices = () => {
    return (
        <section className="myServices">
            <Title title="My Services" />
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
