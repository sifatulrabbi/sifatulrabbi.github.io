import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 1rem;
  padding: 10vh 0;

  .hero-desc {
    margin-bottom: 4rem;
    width: 100%;
    max-width: 70ch;
  }
`;
