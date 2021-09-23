import React from 'react';
import { Wrapper } from './projectCard.styels';

interface Props {
    reverse?: boolean;
}

const ProjectCard: React.FC<Props> = ({ reverse }) => {
    return (
        <Wrapper reverse={reverse}>
            <div className='textContainer'>
                <h3 className='title'>
                    social_media_
                    <br />
                    website
                </h3>
                <p className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                    dicta.
                </p>
            </div>
            <div className='imgContainer'>img</div>
        </Wrapper>
    );
};

export default ProjectCard;
