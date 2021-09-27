import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
    width: 100%;
    height: max-content;
    font-family: ${(p) => p.theme.fontFamily.heading};
    font-size: ${(p) => p.theme.fontSize.h1};
    color: ${(p) => p.theme.palette.font.primary};
    line-height: 1;
    -webkit-text-stroke-width: 0x;

    .outlined {
        color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${(p) => p.theme.palette.primary};

        .filled {
            -webkit-text-stroke-width: 0;
            color: ${(p) => p.theme.palette.primary};
        }
    }
`;

const HeroTitle: React.FC = () => {
    return (
        <Wrapper>
            <span className="outlined">
                Hello<span className="filled">.</span>
            </span>
            <br />
            <span>I am Sifatul</span>
        </Wrapper>
    );
};

export default HeroTitle;
