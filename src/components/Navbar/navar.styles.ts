import styled from 'styled-components';

export const Wrapper = styled.nav`
  z-index: 1500;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 2rem;
  background-color: #fff;
  padding: 0 2rem;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.shadow};

  .navbar_button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar_logo {
    width: 35px;
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
    padding: 2rem 0;
  }
`;
