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
            color: ${(p) => p.theme.palette.primary};
        }
    }

    .subHeading {
        width: max-content;
        font-size: 0.8rem;
        color: ${(p) => p.theme.palette.primary};
        letter-spacing: 1px;
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
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 1rem;

    .dateContainer {
        z-index: 2;
        width: max-content;
        display: flex;
        grid-gap: 1.5rem;
        align-items: center;
        background-color: ${(p) => p.theme.palette.background};
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(100%);

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

        @media screen and (max-width: 700px) {
            transform: translateX(100%) rotate(90deg);
        }
    }

    .worksBtn {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-self: flex-start;
        max-width: 100%;

        button {
            text-align: left;
            font-family: ${(p) => p.theme.fontFamily.body};
            letter-spacing: 5px;
            height: 10rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: opacity 0.3s ease-out;
            width: 10rem;
            position: relative;
            opacity: 0.5;

            &:hover {
                opacity: 1;
            }

            &::before {
                content: '';
                position: absolute;
                top: -3rem;
                bottom: -3rem;
                right: -3rem;
                left: -3rem;
                z-index: -1;
                border-radius: 50%;
                border: 2px solid ${(p) => p.theme.palette.primary};
            }
        }
    }

    .aboutMe {
        z-index: 2;
        max-width: 20ch;

        .btn {
            margin-top: 2rem;
            letter-spacing: 1px;
        }
    }

    @media screen and (min-width: 1200px) {
        .dateContainer {
            .month {
                font-size: 1rem;
            }
        }

        .worksBtn {
            align-self: center;
        }
    }
`;
