import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    *, *::after , *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: inherit;
        color: inherit;
        line-height: inherit;
        font-size: inherit;
    }

    body {
        font-family: ${theme.fontFamily.body};
        line-height: ${theme.lineHeight};
        font-size: ${theme.fontSize.body};
        color: ${theme.palette.font.primary};
        background-color: ${theme.palette.background};
        overflow-x: hidden;

        .customFont {
            font-family: ${theme.fontFamily.heading};
        }
    }

    button, input, textarea {
        background-color: transparent;
        outline: none;
        border: none;
    }

    ul {
        list-style-type: none;
    }

    p {
        font-family: ${theme.fontFamily.body};
        font-size: .9rem;
        color: ${theme.palette.font.secondary};


        @media screen and (min-width: 1200px) {
            font-size: 1rem;
        }
    }

    ::-webkit-scrollbar {
        background-color: transparent;
        width: .5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${theme.palette.primary};
    }
`;

export default GlobalStyles;
