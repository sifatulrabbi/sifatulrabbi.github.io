import React from 'react';
import styled from 'styled-components';
import type { IData } from '../../types';

interface Props {
    data: IData;
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 40ch;
    height: max-content;
    display: flex;
    flex-direction: column;
    grid-gap: 0.2rem;

    .title {
        font-family: ${(p) => p.theme.fontFamily.heading};
        color: ${(p) => p.theme.palette.primary};
        margin-bottom: 0.5rem;
    }

    p {
    }
`;

const Skill: React.FC<Props> = ({ data }) => {
    return (
        <Wrapper>
            <h3 className='title'>{data.title}</h3>
            <p>
                {data.desc}
                Lorem ipsum dolor sit amet consectetur adipisicing elit Cum fugit
                Temporibus eveniet rem recusandae sint
            </p>
        </Wrapper>
    );
};

export default Skill;
