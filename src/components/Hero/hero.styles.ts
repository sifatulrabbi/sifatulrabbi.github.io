import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 2;

  .spacer {
    margin-top: 10vh;
  }

  .scrollBtn {
    position: absolute;
    bottom: 0;
    padding: 1rem 1rem 3rem 1rem;
    color: ${({ theme }) => theme.palette.main};
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.9rem;
    transition: letter-spacing 0.2s ease-out;

    &:hover {
      letter-spacing: 7px;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      height: 2rem;
      width: 1px;
      background: ${({ theme }) => theme.palette.main};
    }
  }

  .heroImg {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 2rem 10vw;

    .heroImg {
      display: block;
    }
  }
`;
