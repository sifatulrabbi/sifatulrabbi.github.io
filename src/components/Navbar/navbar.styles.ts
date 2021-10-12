import styled from 'styled-components';

export const Wrapper = styled.nav<{
  show: boolean;
  shrink: boolean;
}>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  transform: translateY(${({ show }) => (show ? '0%' : '-100%')});
  transition: ${({ theme }) => theme.transition()};
  backdrop-filter: blur(15px);

  ${({ shrink, theme }) =>
    shrink
      ? `height: 70px; box-shadow: ${theme.shadow[1]};
        background-color: ${theme.palette.transDark};`
      : `height: 100px;
        background-color: ${theme.palette.dark};`};

  .navbar-logo {
    height: 50px;
    margin-left: -10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 0 3vw;
  }
`;
