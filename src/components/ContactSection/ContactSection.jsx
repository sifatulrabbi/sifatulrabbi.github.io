import React from 'react';
import ContactFrom from '../ContactForm/ContactFrom';
import './contactSection.scss';

const ContactSection = () => {
    return (
        <section id="contact" className="contactSection">
            <ContactFrom />
        </section>
    );
};

export default ContactSection;
