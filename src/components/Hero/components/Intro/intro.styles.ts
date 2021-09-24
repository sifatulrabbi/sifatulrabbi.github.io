import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: max-content;
    height: max-content;

    .ctaButton {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        height: 30vw;
        width: 30vw;
        min-width: 16rem;
        min-height: 16rem;
        max-width: 26rem;
        max-height: 26rem;
        text-align: left;
        border: 1px solid ${(p) => p.theme.palette.primary};
        color: ${(p) => p.theme.palette.primary};
        border-radius: 50%;
        letter-spacing: 4px;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;

        &:hover {
            opacity: 1;
            transform: rotate(-5deg);
        }
    }
`;
