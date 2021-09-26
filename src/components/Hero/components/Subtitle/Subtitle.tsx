import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: max-content;
    height: max-content;
    font-size: 0.9rem;
    font-family: ${(p) => p.theme.fontFamily.heading};
    color: ${(p) => p.theme.palette.primary};
    margin-top: 6vh;
    margin-left: 2rem;
    letter-spacing: 1px;
    align-self: flex-start;
    position: relative;

    .logo {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        -webkit-text-stroke: 2px ${(p) => p.theme.palette.primary};
        color: transparent;
        font-family: ${(p) => p.theme.fontFamily.body};
        font-weight: 700;
        font-size: 6rem;
        z-index: -1;
        opacity: 0.2;
    }

    @media screen and (min-width: 1200px) {
        align-self: flex-end;
        font-size: 1rem;
    }
`;

const HeroSubtitle: React.FC = () => {
    return (
        <Wrapper>
            <div className='logo'>{'#'}</div>
            <h2 className='subTitle1'>Web developer</h2>
            <h2 className='subTitle2'>Freelancer</h2>
        </Wrapper>
    );
};

export default HeroSubtitle;
