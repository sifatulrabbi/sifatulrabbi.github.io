import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  color: ${({ theme }) => theme.palette.dark};

  .link_btn {
    height: max-content;
    width: max-content;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid transparent;

    &.active {
      border-color: ${({ theme }) => theme.palette.main};
      color: ${({ theme }) => theme.palette.main};
    }

    &:hover {
      color: ${({ theme }) => theme.palette.main};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    justify-content: flex-start;

    .link_btn {
      margin: 0 1rem;
    }
  }
`;
