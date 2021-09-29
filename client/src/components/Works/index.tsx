import React from 'react';
import { ProjectCard } from './components';
import { Wrapper } from './works.styles';

const Works: React.FC = () => {
    return (
        <Wrapper id='works'>
            <h2 className='title'>
                selected_
                <br />
                works<span className='colored'>:</span>
            </h2>
            <div className='cardsWrapper'>
                <ProjectCard />
                <ProjectCard reverse />
                <ProjectCard />
            </div>
        </Wrapper>
    );
};

export default Works;
