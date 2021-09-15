import React from 'react';
import ContactFrom from '../ContactForm/ContactFrom';
import Title from '../Title/Title';

const ContactSection = () => {
    return (
        <div className="contactSection">
            <Title title="Contact" />
            <ContactFrom />
        </div>
    );
};

export default ContactSection;
