import React from 'react';
import ContactFrom from '../ContactForm/ContactFrom';
import Title from '../Title/Title';

const ContactSection = () => {
    return (
        <section id="contact" className="contactSection">
            <Title title="Contact" />
            <ContactFrom />
        </section>
    );
};

export default ContactSection;
