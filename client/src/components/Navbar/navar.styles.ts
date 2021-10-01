import styled from 'styled-components';

export const Wrapper = styled.aside`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    box-shadow: ${({ theme }) => theme.shadow()[0]};

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
