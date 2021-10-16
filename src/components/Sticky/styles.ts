import styled from 'styled-components';

const Div = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  bottom: 20vh;
  padding: 0 1rem;
  transform-origin: left;

  button {
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.grayish};
    transition: ${({ theme }) => theme.transition('color')};

    &:hover {
      color: ${({ theme }) => theme.palette.main};
    }

    .label {
      color: inherit;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    z-index: inherit;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.palette.grayish};
  }
`;

export const EmailWrapper = styled(Div)`
  right: 5vw;
  transform-origin: right;
  transform: rotate(90deg);

  &::before {
    right: -100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    transform: rotate(0);
    display: none;
  }
`;

export const SocialLinksWrapper = styled(Div)`
  left: 5vw;
  transform: rotate(-90deg);

  .icon {
    font-size: 1.3rem;
  }

  &::before {
    left: -100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    position: absolute;
    bottom: 13rem;
    left: 50%;
    transform: translateX(-50%) rotate(0);

    &::before {
      content: none;
    }
  }
`;
