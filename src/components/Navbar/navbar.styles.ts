import styled from 'styled-components';

export const Wrapper = styled.nav`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    height: max-content;
    background: linear-gradient(180deg, #000000 0%, transparent 100%);
    font-family: ${(p) => p.theme.fontFamily.heading};
    padding-top: 2rem;

    ul {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: ${(p) => p.theme.padding()};

        .navLink {
            font-size: 0.8rem;
            padding: 0.8rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 1px;
            position: relative;
            transition: transform 0.4s ease-out;
            transform-origin: left;

            &.logo {
                &::before {
                    content: none;
                }
                &:hover {
                    transform: none;
                }
            }

            &:hover {
                transform: rotate(-3deg);
            }

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
