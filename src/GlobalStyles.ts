import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: inherit;
    font-family: inherit;
    font-size: 15px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
      font-size: 16px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    color: ${({ theme }) => theme.palette.grayish};
    font-size: ${({ theme }) => theme.typography.fontSize.body1};
    background-color: ${({ theme }) => theme.palette.dark};
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  button, input {
    outline: none;
    border: none;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    background: transparent;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.transparent};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const AppWrapper = styled.main`
  ${({ theme }) => theme.padding()};
  width: 100%;
  height: max-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 40vh;
`;

export default GlobalStyle;
