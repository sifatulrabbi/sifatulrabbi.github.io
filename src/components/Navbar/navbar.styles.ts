import styled from 'styled-components';

export const Wrapper = styled.nav<{ show: boolean; shrink: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  transform: translateY(${({ show }) => (show ? '0%' : '-100%')});
  transition: ${({ theme }) => theme.transition()};

  ${({ shrink, theme }) =>
    shrink
      ? `height: 70px; box-shadow: ${theme.shadow[1]};`
      : `  height: 100px;`}

  .navbar-logo {
    height: 50px;
    margin-left: -10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 0 3vw;
  }
`;

export const MenuButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  position: relative;

  .bar {
    display: block;
    height: 3px;
    background-color: ${({ theme }) => theme.palette.main};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition()};
    position: absolute;
    z-index: 1500;
    top: 50%;
    right: ${({ active }) => (active ? `50%` : `0`)};

    &.small {
      ${({ active }) =>
        active
          ? `width: 100%;
            transform: translate(50%, -50%) rotate(-45deg);`
          : `width: 80%;
            transform: translate(0, 150%);`};
    }

    &.big {
      ${({ active }) =>
        active
          ? `width: 100%;
            transform: translate(50%, -50%) rotate(45deg);`
          : `width: 100%;
            transform: translate(0, -300%);`};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    display: none;
  }
`;
