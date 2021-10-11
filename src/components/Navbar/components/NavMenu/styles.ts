import styled from 'styled-components';

export const Wrapper = styled.ul<{ active: boolean }>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  z-index: 100;

  .list-btn {
    cursor: pointer;
    padding: 0.5rem;
    color: ${({ theme }) => theme.palette.light};

    &:hover {
      color: ${({ theme }) => theme.palette.main};
    }

    .list-label {
      color: inherit;
      transition: ${({ theme }) => theme.transition('color')};
    }

    .colored {
      color: ${({ theme }) => theme.palette.main};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 50%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.palette.dark};
    box-shadow: ${({ theme }) => theme.shadow[1]};
    transition: ${({ theme }) => theme.transition('transform')};
    transform: ${({ active }) =>
      active ? `translate(0, 0)` : `translate(150%, 0%)`};
  }
`;
