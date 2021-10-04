import styled from 'styled-components';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 600px;
  z-index: 1000;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow()[1]};
  transform: translate(-150%, 0);
  transition: transform 0.4s ease-out;
  padding: calc(65px + 2rem) 2rem 0 2rem;

  &.show {
    transform: translate(0, 0%);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 2rem 2rem 0 calc(65px + 2rem);
  }
`;
