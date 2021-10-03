import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 1500;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.shadow};

  .navbar {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &_logo_button {
      display: flex;
      align-items: center;
      justify-content: center;

      &_img {
        width: 35px;
        cursor: pointer;
      }
    }
  }

  .contentBar {
    position: absolute;
  }
`;
