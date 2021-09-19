import React from 'react';
import Button from '../Button/Button';
import './contactForm.scss';

const ContactFrom = () => {
    return (
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
            <Button label="Send" />
        </form>
    );
};

export default ContactFrom;
