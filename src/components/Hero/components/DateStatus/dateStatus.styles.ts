import styled from 'styled-components';

export const Wrapper = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    background-color: ${(p) => p.theme.palette.background};
    padding: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(70%);

    @media screen and (max-width: 600px) {
        transform: translateX(50%) rotate(90deg);
    }

    .day {
        font-size: ${(p) => p.theme.fontSize.h1};
        font-family: ${(p) => p.theme.fontFamily.heading};
        font-weight: 900;
        color: transparent;
        line-height: 1;
        -webkit-text-stroke: 2px white;
    }

    .month {
        font-family: ${(p) => p.theme.fontFamily.heading};
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .status {
        color: ${(p) => p.theme.palette.font.secondary};
    }
`;
