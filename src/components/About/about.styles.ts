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

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
    grid-gap: 5rem;
  }

  .about-me {
    width: 100%;
    max-width: 57ch;
  }

  .imgWrapper {
    justify-self: center;
    position: relative;
    height: clamp(180px, 20vw, 300px);
    width: clamp(180px, 20vw, 300px);
    border-radius: ${({ theme }) => theme.borderRadius};
    background-image: url(${myImg});
    background-size: cover;
    background-position: center;
    background-blend-mode: soft-light;
    background-color: ${({ theme }) => theme.palette.transparent};

    &::before {
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

      &::before {
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
