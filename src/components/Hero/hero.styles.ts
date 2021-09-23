import styled from 'styled-components';

export const Wrapper = styled.section`
    width: max-content;
    max-width: 100%;
    height: max-content;
    padding: 0 2rem;
    min-height: 100vh;
    padding-top: 10rem;
    font-family: ${(p) => p.theme.fontFamily.heading};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .heading {
        font-size: ${(p) => p.theme.fontSize.h1};
        line-height: 1.1;
        letter-spacing: 1px;
        margin-bottom: 2rem;

        .outlined {
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: ${(p) => p.theme.palette.primary};
            color: transparent;
        }

        .filled {
            margin-left: 3px;
            color: ${(p) => p.theme.palette.primary};
        }
    }

    .subHeading {
        width: max-content;
        font-size: 0.8rem;
        color: ${(p) => p.theme.palette.primary};
    }

    @media screen and (min-width: 1200px) {
        padding-right: 10vw;
        padding-left: 10vw;

        .subHeading {
            font-size: 1rem;
            align-self: flex-end;
        }
    }
`;

export const HeroContent = styled.div`
    width: 100%;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .dateContainer {
        width: max-content;
        display: flex;
        grid-gap: 1.5rem;
        align-items: center;

        .day {
            font-family: 'Syncopate', sans-serif;
            font-size: ${(p) => p.theme.fontSize.h1};
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: ${(p) => p.theme.palette.font.primary};
            color: transparent;
            line-height: 0.9;
        }

        .month {
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 2px;

            span {
                font-family: ${(p) => p.theme.fontFamily.body};
                text-transform: lowercase;
                letter-spacing: 0px;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .dateContainer {
            .month {
                font-size: 1rem;
            }
        }
    }
`;
