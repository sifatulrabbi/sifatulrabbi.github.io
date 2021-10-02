import React from 'react';
import { Wrapper } from './projectCard.styels';
import { IWork } from '../../data';

interface Props {
    data: IWork;
}

const ProjectCard: React.FC<Props> = ({ data }) => {
    return (
        <Wrapper reverse={data.reverse}>
            <div className='textContainer'>
                <h3
                    className='title'
                    dangerouslySetInnerHTML={{ __html: data.title }}
                ></h3>
                <p className='desc' dangerouslySetInnerHTML={{ __html: data.desc }}></p>
            </div>
            <div className='imgContainer'>
                {data.imgUrl ? <img src={data.imgUrl} alt={data.title} /> : 'img'}
            </div>
        </Wrapper>
    );
};

export default ProjectCard;
