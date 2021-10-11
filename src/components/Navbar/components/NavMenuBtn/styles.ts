import styled from 'styled-components';

export const Wrapper = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  height: 40px;
  width: 40px;
  position: relative;

  .bar {
    display: block;
    height: 3px;
    background-color: ${({ theme }) => theme.palette.main};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition()};
    position: absolute;
    top: 50%;
    right: ${({ active }) => (active ? `50%` : `0`)};

    &.small {
      ${({ active }) =>
        active
          ? `width: 100%;
            transform: translate(50%, -50%) rotate(-45deg);`
          : `width: 80%;
            transform: translate(0, 150%);`};
    }

    &.big {
      ${({ active }) =>
        active
          ? `width: 100%;
            transform: translate(50%, -50%) rotate(45deg);`
          : `width: 100%;
            transform: translate(0, -300%);`};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    display: none;
  }
`;
