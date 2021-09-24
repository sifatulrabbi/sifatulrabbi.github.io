import React from 'react';
import { Wrapper } from './intro.styles';
import DayStatus from '../DateStatus/DataStatus';
import About from '../About/About';

const Intro: React.FC = () => {
    return (
        <Wrapper>
            <button className='ctaButton'>
                <span>
                    Show
                    <br />
                    My Works
                </span>
            </button>
            <About />
            <DayStatus />
        </Wrapper>
    );
};

export default Intro;
