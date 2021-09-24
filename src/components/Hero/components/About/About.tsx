import React from 'react';
import { Wrapper } from './about.styles';

const About: React.FC = () => {
    return (
        <Wrapper>
            <p className='text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
                et, sequi reiciendis nemo mollitia architecto minus assumenda, inventore
                repellendus ad ipsa doloremque harum suscipit sunt.
            </p>
            <button className='aboutButton'>Contact</button>
        </Wrapper>
    );
};

export default About;