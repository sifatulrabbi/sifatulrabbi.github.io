import styled from 'styled-components';

interface Props {
    reverse?: boolean;
}

export const Wrapper = styled.div<Props>`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;

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
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }

        .desc {
            margin-left: 4rem;
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

        .title {
            font-size: 1rem;
        }
    }
`;
