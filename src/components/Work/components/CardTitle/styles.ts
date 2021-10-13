import styled from 'styled-components';

export const Title = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  grid-gap: 0.8rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  padding: 0.5rem;
  border: 2px dashed transparent;
  transition: ${({ theme }) => theme.transition('border')};
  cursor: pointer;

  &:hover {
    border: 2px dashed ${({ theme }) => theme.palette.main};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    align-items: ${({ reverse }) => (reverse ? 'flex-start' : 'flex-end')};
  }
`;
