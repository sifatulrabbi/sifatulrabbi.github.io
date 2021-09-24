import React from 'react';
import { Wrapper } from './skills.styles';
import { Skill } from './components';

const Skills: React.FC = () => {
    return (
        <Wrapper>
            <h2 className='skillsTitle'>
                my_
                <br />
                skills<span className='colored'>:</span>
            </h2>
            <div className='skillsWrapper'>
                <p className='skillDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
                    asperiores facilis laboriosam dolores vero incidunt ad nesciunt iusto
                    praesentium.
                </p>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </Wrapper>
    );
};

export default Skills;
