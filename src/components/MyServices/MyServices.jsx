import React from 'react';
import './myServices.scss';
import ServiceCard from '../ServiceCard/ServiceCard';

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
            <div className="myServices_Cards">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </section>
    );
};

export default MyServices;
