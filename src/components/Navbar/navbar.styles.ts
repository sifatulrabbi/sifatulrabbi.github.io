import styled from 'styled-components';

export const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: max-content;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    font-family: ${(p) => p.theme.fontFamily.heading};
    padding-top: 2rem;

    ul {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: ${(p) => p.theme.padding()};

        button {
            font-size: 0.8rem;
            padding: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            height: 1.5rem;
        }
    }

    @media screen and (min-width: 1200px) {
        ul {
            button {
                font-size: 1rem;
            }

            img {
                height: 1.8rem;
            }
        }
    }
`;
