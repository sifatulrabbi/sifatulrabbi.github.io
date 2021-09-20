import React from 'react';
import './contactSection.scss';

const ContactSection = () => {
    return (
        <section id="contact" className="contactSection">
            <div className="contactSection_content">
                <span className="contactSection_caption">Contact me</span>
                <h2 className="contactSection_header">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui!
                </h2>
            </div>
            <form className="contactForm">
                <div className="contactForm_group">
                    <label htmlFor="name" className="contactForm_label">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="contactForm_input"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="contactForm_group">
                    <label htmlFor="email" className="contactForm_label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="contactForm_input"
                        placeholder="Your email"
                        required
                    />
                </div>
                <div className="contactForm_group">
                    <label htmlFor="message" className="contactForm_label">
                        Message
                    </label>
                    <textarea
                        type="text"
                        id="message"
                        className="contactForm_input"
                        placeholder="Write your message"
                        maxLength="500"
                        required
                    />
                </div>
                <button className="contactForm_btn">Send</button>
            </form>
        </section>
    );
};

export default ContactSection;
