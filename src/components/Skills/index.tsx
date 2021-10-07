import React from 'react';
import { Wrapper } from './skills.styles';
import { Skill } from './components';
import data from './data';

const Skills: React.FC = () => {
    return (
        <Wrapper id='skills'>
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
                {data.map((skill) => (
                    <Skill key={skill.id} data={skill} />
                ))}
            </div>
        </Wrapper>
    );
};

export default Skills;
