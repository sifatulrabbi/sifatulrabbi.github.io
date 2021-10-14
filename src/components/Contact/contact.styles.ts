import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contact-title {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .contact-desc {
    width: 100%;
    max-width: 55ch;
    text-align: center;
  }

  .contact-btn {
    margin-top: 10vh;
  }
`;
