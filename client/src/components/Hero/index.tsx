import { Component } from 'react';
import styled from 'styled-components';
import { heroImg } from '../../images';
import Title from '../Title';

interface Props {}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

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

class Hero extends Component<Props> {
    state = {};

    render() {
        return (
            <Wrapper>
                <Title variant='h1' text={`Hello I'm<br/> Sifatul Rabbi`} />
                <div className='spacer' />
                <Title variant='h3' text='Web Developer UI/UX Designer' />
                <button className='scrollBtn'>Scroll</button>
                <img className='heroImg' src={heroImg} alt='hero' />
            </Wrapper>
        );
    }
}

export default Hero;
