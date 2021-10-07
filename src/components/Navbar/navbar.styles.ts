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

  .navbar_logo {
    width: 30px;
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
    padding: 2rem 0;
  }
`;

export const MenuIcon = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  position: relative;

  --add: 0;

  .bar {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 4px;
    width: 100%;
    display: block;
    background-color: ${({ theme }) => theme.palette.main};
    border-radius: 1rem;
    transition: transform 0.2s ease-out;

    &.top {
      transform: ${({ show }) =>
        show
          ? `translate(-50%, -50%) rotate(calc((45 - (var(--add) / 4)) * 1deg))`
          : `translate(-50%, calc((300 + var(--add)) * -1%))`};
    }

    &.center {
      transition: transform 0.2s ease-out, opacity 0.2s ease-out;
      transform: ${({ show }) =>
        show ? `translate(-100%, -50%)` : `translate(-50%, -50%)`};
      opacity: ${({ show }) => (show ? 0 : 1)};
    }

    &.bottom {
      transform: ${({ show }) =>
        show
          ? `translate(-50%, -50%) rotate(calc((45 - (var(--add) / 4)) * -1deg))`
          : `translate(-50%, calc((200 + var(--add)) * 1%))`};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    &:hover {
      --add: 50;
    }
  }
`;
