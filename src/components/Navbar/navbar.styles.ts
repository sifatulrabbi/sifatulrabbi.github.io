import styled from 'styled-components';

interface Props {
    show: boolean;
}

export const Wrapper = styled.nav<Props>`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    height: max-content;
    background: linear-gradient(180deg, #000000 0%, transparent 100%);
    font-family: ${(p) => p.theme.fontFamily.heading};
    padding-top: 2rem;
    transition: transform 0.4s ease-out;
    transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(-100%)')};

    ul {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0;

        .navLink {
            font-size: 0.8rem;
            cursor: pointer;
            margin: 0 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 1px;
            ${(p) => p.theme.hoverAnim};

            &.logo {
                &::before {
                    content: none;
                }
                &:hover {
                    transform: none;
                }
            }

            img {
                height: 1.5rem;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        ul {
            padding: 0 10vw;
            button {
                font-size: 1rem;
            }

            img {
                height: 1.8rem;
            }
        }
    }
`;
