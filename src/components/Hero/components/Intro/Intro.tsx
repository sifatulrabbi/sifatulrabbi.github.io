import React from 'react';
import { Wrapper } from './intro.styles';
import DayStatus from '../DateStatus/DataStatus';
import About from '../About/About';

const Intro: React.FC = () => {
    const handleClick = () => {
        const div = document.getElementById('works');
        div && div.scrollIntoView();
    };

    return (
        <Wrapper>
            <button className='ctaButton' onClick={handleClick}>
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
