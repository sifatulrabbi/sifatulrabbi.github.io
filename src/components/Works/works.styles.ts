import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: max-content;
    padding: 0 2rem;
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;

    .title {
        max-width: 100%;
        font-size: ${(p) => p.theme.fontSize.h2};
        font-family: ${(p) => p.theme.fontFamily.heading};
        margin-bottom: clamp(5rem, 10vw, 14rem);
        line-height: 1;

        .colored {
            color: ${(p) => p.theme.palette.primary};
        }
    }

    .cardsWrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-gap: 20vh;
    }

    @media screen and (min-width: 1200px) {
        padding: 0 10vw;
    }
`;
