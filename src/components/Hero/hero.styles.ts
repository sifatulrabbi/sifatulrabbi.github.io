import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: max-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 1rem;

  .hero-desc {
    margin-bottom: 4rem;
    width: 100%;
    max-width: 70ch;
  }
`;
