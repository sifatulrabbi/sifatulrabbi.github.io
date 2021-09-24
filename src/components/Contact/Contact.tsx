import React from 'react';
import { Wrapper } from './contact.styles';

const Contact: React.FC = () => {
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
            <button className='button'>Let's talk!</button>
        </Wrapper>
    );
};

export default Contact;
