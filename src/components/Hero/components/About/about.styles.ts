import styled from 'styled-components';

export const Wrapper = styled.div`
    height: max-content;
    max-width: 50ch;
    align-self: center;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateX(70%);

    @media screen and (max-width: 1100px) {
        transform: translateX(0%) translateY(80%);
    }

    .text {
        font-size: 0.9rem;
        color: ${(p) => p.theme.palette.font.secondary};
    }

    .aboutButton {
        font-family: ${(p) => p.theme.fontFamily.heading};
        letter-spacing: 1px;
        cursor: pointer;
        color: ${(p) => p.theme.palette.primary};
        margin-top: 2rem;
        position: relative;
        padding: 1rem;
        transform-origin: left;
        transition: transform 0.4s ease-out;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: ${(p) => p.theme.palette.primary};
            height: 3px;
            width: 0;
            transition: width 0.4s ease-out;
        }

        &:hover::before {
            width: 100%;
        }

        &:hover {
            transform: rotate(-3deg);
        }
    }
`;
