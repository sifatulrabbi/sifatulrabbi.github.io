import React from 'react';
import { Wrapper } from './contact.styles';

const Contact: React.FC = () => {
    const openLink = () => {
        window.open('mailto:mdsifatulislam.rabbi@gmail.com', '_blank');
    };

    return (
        <Wrapper>
            <h2 className='title'>
                I'm
                <br />
                always excited
                <br />
                about cool
                <br />
                projects.
                <br />
                Are you thinking
                <br />
                about one?
            </h2>
            <button className='button' onClick={openLink}>
                Let's talk!
            </button>
        </Wrapper>
    );
};

export default Contact;
