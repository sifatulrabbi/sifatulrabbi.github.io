import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    padding: 2rem;
    margin-top: 40vh;

    .title,
    .button {
        font-family: ${(p) => p.theme.fontFamily.heading};
        font-size: ${(p) => p.theme.fontSize.h2};
        color: ${(p) => p.theme.palette.font.primary};
        letter-spacing: -1px;
        line-height: 1.1;
        text-align: left;
    }

    .button {
        margin-top: 4rem;
        color: ${(p) => p.theme.palette.primary};
        letter-spacing: -2px;
        cursor: pointer;
        position: relative;
        transform-origin: left;
        transition: transform 0.4s ease-out;

        &:hover {
            transform: rotate(-2deg);
        }

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: ${(p) => p.theme.palette.primary};
            height: 10px;
            width: 0;
            transition: width 0.4s ease-out;
        }

        &:hover::before {
            width: 100%;
        }
    }

    @media screen and (min-width: 1200px) {
        padding: 2rem 15vw;
    }
`;
