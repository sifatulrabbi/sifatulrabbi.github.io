import styled from 'styled-components';
import { myImg } from '../../images';

export const Wrapper = styled.section`
  width: max-content;
  max-width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.padding()};

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
    grid-gap: 5rem;
  }

  .about-me {
    width: 100%;
    max-width: 57ch;

    .skills-list {
      margin-top: 2rem;
      width: 100%;
      height: max-content;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.5rem 0;
    }

    .skills-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${({ theme }) => theme.palette.main};
    }
  }

  .imgWrapper {
    justify-self: center;
    position: relative;
    height: clamp(250px, 20vw, 300px);
    width: clamp(250px, 20vw, 300px);
    border-radius: ${({ theme }) => theme.borderRadius};
    background-image: url(${myImg});
    background-size: cover;
    background-position: center;
    ${({ theme }) => theme.overlay()};

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 2px solid ${({ theme }) => theme.palette.main};
      transform: translate(10%, 10%);
      z-index: -1;
      transition: ${({ theme }) => theme.transition('transform')};
    }

    &:hover {
      background-blend-mode: normal;

      &::after {
        transform: translate(5%, 5%);
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    .grid {
      grid-template-columns: auto 1fr;
    }
  }
`;
