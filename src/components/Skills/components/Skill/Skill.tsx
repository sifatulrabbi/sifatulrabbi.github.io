import React from 'react';
import styled from 'styled-components';

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

const Skill: React.FC = () => {
    return (
        <Wrapper>
            <h3 className='title'>TypeScript</h3>
            <p>Lorem ipsum dolor sit</p>
            <p>amet consectetur adipisicing</p>
            <p>elit Cum fugit Temporibus</p>
            <p>eveniet rem recusandae sint</p>
        </Wrapper>
    );
};

export default Skill;
