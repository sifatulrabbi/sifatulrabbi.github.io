import styled from 'styled-components';

export const Desc = styled.div<{ reverse: boolean }>`
  margin-bottom: 1rem;
  padding: 1rem 0.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 1.5rem;
    backdrop-filter: blur(5px);
    box-shadow: ${({ theme }) => theme.shadow[0]};
    background-color: ${({ theme }) => theme.palette.transDark};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition('box-shadow')};
    ${({ reverse }) =>
      reverse
        ? `text-align: left;
      margin-right: -3rem;`
        : `text-align: right;
      margin-left: -3rem;`}

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow[1]};
    }
  }
`;
