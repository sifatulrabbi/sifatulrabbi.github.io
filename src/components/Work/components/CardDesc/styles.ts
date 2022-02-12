import styled from 'styled-components';

export const Desc = styled.div<{ reverse: boolean }>`
  margin-bottom: 1rem;
  padding: 1rem 0.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition('box-shadow')};
    ${({ reverse }) => (reverse ? `text-align: left;` : `text-align: right;`)}
  }
`;
