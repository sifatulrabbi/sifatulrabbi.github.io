import styled from 'styled-components';

export const Wrapper = styled.button<{ big?: true }>`
  padding: ${({ big }) => (big ? `1rem 2.8rem` : `.8rem 1.2rem`)};
  border: ${({ theme }) => `2px solid ${theme.palette.main}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition('background-color')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.transparent};
  }
`;
