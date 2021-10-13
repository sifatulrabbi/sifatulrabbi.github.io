import styled from 'styled-components';

export const Bottom = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  align-items: flex-start;
  padding: 0.5rem;

  .tags,
  .links,
  .btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .tags,
  .links {
    grid-gap: 0.3rem 1rem;
  }

  .links {
    .btn {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.palette.light};
      cursor: pointer;
      transition: ${({ theme }) => theme.transition('color')};

      &:hover {
        color: ${({ theme }) => theme.palette.main};
      }

      &-icon {
        font-size: inherit;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    align-items: ${({ reverse }) => (reverse ? 'flex-start' : 'flex-end')};

    .tags {
      justify-content: ${({ reverse }) =>
        reverse ? 'flex-start' : 'flex-end'};
    }
  }
`;
