import React from 'react';
import { Wrapper } from './intro.styles';
import DayStatus from '../DateStatus/DataStatus';
import About from '../About/About';
import { goto } from '../../../../functions';

const Intro: React.FC = () => {
    return (
        <Wrapper>
            <button className='ctaButton' onClick={goto.worksSection}>
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
