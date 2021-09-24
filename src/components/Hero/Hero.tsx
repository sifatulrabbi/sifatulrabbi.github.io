import React from 'react';
import { Wrapper } from './hero.styles';
import { Title, Subtitle, Intro } from './components';

const Hero: React.FC = () => {
    return (
        <Wrapper>
            <Title />
            <Subtitle />
            <div className='contentWrapper'>
                <Intro />
            </div>
        </Wrapper>
    );
};

export default Hero;
