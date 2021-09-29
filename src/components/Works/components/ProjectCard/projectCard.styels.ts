import styled from 'styled-components';

interface Props {
    reverse?: boolean;
}

export const Wrapper = styled.div<Props>`
    width: 100%;
    max-width: 1000px;
    height: max-content;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    grid-gap: 2rem;

    .textContainer {
        padding-left: 2rem;
        flex: 1;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
            font-family: ${(p) => p.theme.fontFamily.heading};
            line-height: 1.5;
            font-size: ${(p) => p.theme.fontSize.h3};
            margin-bottom: 1rem;
            letter-spacing: 1px;
            color: ${(p) => p.theme.palette.primary};
        }

        .desc {
            margin-left: 4rem;
            font-size: 0.9rem;
        }
    }

    .imgContainer {
        flex: 1.3;
        width: 100%;
        min-height: 20ch;
        background-color: gray;
    }

    @media screen and (min-width: 1200px) {
        flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

        .textContainer {
            padding-left: 4rem;
        }
    }
`;
