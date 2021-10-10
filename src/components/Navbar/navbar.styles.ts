import styled from 'styled-components';

export const Wrapper = styled.nav<{ show: boolean; shrink: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1500;
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

  .navbar-list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;

    &-btn {
      cursor: pointer;
      padding: 0.5rem;
      color: ${({ theme }) => theme.palette.light};

      &:hover {
        color: ${({ theme }) => theme.palette.main};
      }

      &-label {
        color: inherit;
        transition: ${({ theme }) => theme.transition('color')};
      }

      .colored {
        color: ${({ theme }) => theme.palette.main};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 0 3vw;
  }
`;
