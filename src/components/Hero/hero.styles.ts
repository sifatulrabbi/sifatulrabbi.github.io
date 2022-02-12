import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 1rem;
  padding-top: 5rem;
  ${({ theme }) => theme.padding()};

  .hero-desc {
    margin-top: 2rem;
    margin-bottom: 4rem;
    width: 100%;
    max-width: 70ch;
  }
`;
