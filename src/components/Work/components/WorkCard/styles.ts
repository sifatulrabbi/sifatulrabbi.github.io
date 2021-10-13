import styled from 'styled-components';

export const Card = styled.div<{ reverse: boolean }>`
  display: grid;
  grid-template-areas:
    'image'
    'content';
  grid-template-columns: 1fr;
  position: relative;
  align-items: center;
  grid-gap: 2rem 0;
  transition: ${({ theme }) => theme.transition('border-color')};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    border-color: ${({ theme }) => theme.palette.main};
  }

  .img-wrapper {
    grid-area: image;
  }

  .content-wrapper {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    ${({ reverse }) =>
      !reverse
        ? `grid-template-areas: 'image content'; grid-template-columns: 1.3fr 1fr;`
        : `grid-template-areas: 'content image'; grid-template-columns: 1fr 1.3fr;`}

    .content-wrapper {
      align-items: ${({ reverse }) => (reverse ? 'flex-start' : 'flex-end')};
    }
  }
`;
