import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 100%;
  margin-bottom: 4rem;
  overflow: hidden;

  .colored {
    font-size: 1.4rem;
  }

  .label {
    position: relative;
    width: max-content;

    &::before {
      content: '';
      background-color: ${({ theme }) => theme.palette.transparent};
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      right: calc(-100% - 1rem);
      transform: translate(0, -50%);
    }
  }
`;
