import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    padding: 2rem;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow-x: hidden;

    .contentWrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 30vh 0 30vh 0;
    }

    @media screen and (min-width: 1200px) {
        padding: 2rem 10vw;

        .contentWrapper {
            padding: 0 5vw;
        }
    }
`;
