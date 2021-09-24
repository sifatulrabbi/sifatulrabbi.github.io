import React from 'react';
import { Wrapper } from './about.styles';

const openGithub = () => {
    window.open('https://github.com/temujins', '_blank');
};

const About: React.FC = () => {
    return (
        <Wrapper>
            <p className='text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
                et, sequi reiciendis nemo mollitia architecto minus assumenda, inventore
                repellendus ad ipsa doloremque harum suscipit sunt.
            </p>
            <button className='aboutButton' onClick={openGithub}>
                Github
            </button>
        </Wrapper>
    );
};

export default About;
