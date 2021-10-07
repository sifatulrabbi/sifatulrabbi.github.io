import React from 'react';
import { ProjectCard } from './components';
import { Wrapper } from './works.styles';
import data from './data';

const Works: React.FC = () => {
    return (
        <Wrapper id='works'>
            <h2 className='title'>
                selected_
                <br />
                works<span className='colored'>:</span>
            </h2>
            <div className='cardsWrapper'>
                {data.map((work) => (
                    <ProjectCard key={work.id} data={work} />
                ))}
            </div>
        </Wrapper>
    );
};

export default Works;
