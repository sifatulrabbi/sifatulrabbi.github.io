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
        font-family: ${({ theme }) => theme.typography.fontFamily.body};
        color: ${({ theme }) => theme.palette.dark};
        line-height: ${({ theme }) => theme.lineHeight};
        font-size: ${({ theme }) => theme.typography.fontSize.body};
    }

    button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }

    #app {
        height: 100vh;
        width: clamp(100%, 100%, 100vw);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 65px 1fr;
        
        @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
            grid-template-columns:  65px 1fr;
            grid-template-rows: 1fr;
        }
    }

    ::-webkit-scrollbar {
        background-color: transparent;
        width: .5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${theme.palette.main};
    }
`;

export default GlobalStyles;
