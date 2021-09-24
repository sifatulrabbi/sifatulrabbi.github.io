import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: max-content;
    margin-top: 40vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .skillsTitle {
        font-size: ${(p) => p.theme.fontSize.h2};
        font-family: ${(p) => p.theme.fontFamily.heading};
        line-height: 1.2;
        align-self: flex-end;
        color: ${(p) => p.theme.palette.font.primary};
        margin-bottom: 15vh;

        .colored {
            color: ${(p) => p.theme.palette.primary};
        }
    }

    .skillsWrapper {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 4rem;

        .skillDesc {
            max-width: 40ch;
        }
    }

    @media screen and (min-width: 1200px) {
        padding: 2rem 15vw;
    }
`;
