import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 0.5rem;

  button {
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border: 2px dashed transparent;
    transition: ${({ theme }) => theme.transition('border-color')};

    &:hover {
      border-color: ${({ theme }) => theme.palette.main};
    }
  }
`;
