import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: max-content;
    height: max-content;
    font-size: 0.9rem;
    font-family: ${(p) => p.theme.fontFamily.heading};
    color: ${(p) => p.theme.palette.primary};
    margin-top: 5vh;
    letter-spacing: 1px;
    align-self: flex-start;

    @media screen and (min-width: 1200px) {
        align-self: flex-end;
        font-size: 1rem;
    }
`;

const HeroSubtitle: React.FC = () => {
    return (
        <Wrapper>
            <h2>Web development</h2>
            <h2>Freelancer</h2>
        </Wrapper>
    );
};

export default HeroSubtitle;
