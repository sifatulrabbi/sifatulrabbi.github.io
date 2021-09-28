import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin-top: 15vh;

    .container {
        background-color: ${(p) => p.theme.palette.primary};
        min-height: 20vh;
        padding: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        grid-gap: 3rem;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        grid-gap: 2rem;

        button {
            font-family: ${(p) => p.theme.fontFamily.heading};
            font-size: 0.9rem;
            letter-spacing: 2px;
            cursor: pointer;
            line-height: 1;
            transform-origin: left;
            ${(p) => p.theme.hoverAnim};

            &::before {
                background-color: ${(p) => p.theme.palette.primary};
            }
        }
    }

    .copyright {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 2rem;

        span {
            font-size: 0.9rem;
            color: ${(p) => p.theme.palette.font.primary};
            opacity: 0.8;
        }

        button {
            cursor: pointer;
        }
    }

    @media screen and (min-width: 1200px) {
        .container {
            padding: 2rem 10vw;
        }
    }
`;
