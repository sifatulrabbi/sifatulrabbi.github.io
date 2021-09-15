import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Title from '../Title/Title';
import Button from '../Button/Button';
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
            <div className="myServices_action">
                <Button label="Get Started" big />
            </div>
        </section>
    );
};

export default MyServices;
