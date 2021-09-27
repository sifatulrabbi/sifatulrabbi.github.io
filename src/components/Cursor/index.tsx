import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    z-index: 2500;
    height: 4rem;
    width: 4rem;
    border: 2px solid #ffffff99;
    border-radius: 50%;
    transition: all 0.3s ease-out;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: anim 1s ease-out infinite;

    @media screen and (max-width: 1100px) {
        display: none;
    }

    &.showAnim {
        animation: clickAnim 300ms ease-out;
    }

    @keyframes anim {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        30% {
            transform: translate(-50%, -50%) scale(1.2);
        }
        60% {
            transform: translate(-50%, -50%) scale(0.9);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes clickAnim {
        0%,
        100% {
            transform: translate(-50%, -50%) scale(1);
            border: 2px solid ${(p) => p.theme.palette.font.secondary};
        }
        50% {
            transform: translate(-50%, -50%) scale(2);
            border-color: ${(p) => p.theme.palette.primary};
        }
    }
`;

const Cursor: React.FC = () => {
    const [y, setY] = useState<number>(0);
    const [x, setX] = useState<number>(0);
    const [animClass, animClassSet] = useState<string>('');

    const changePos = (e: MouseEvent) => {
        setY(e.pageY);
        setX(e.pageX);
    };

    const clickAnim = () => {
        animClassSet('showAnim');

        setTimeout(() => {
            animClassSet('');
        }, 500);
    };

    useEffect(() => {
        document.addEventListener('mousemove', (e: MouseEvent) => changePos(e));
        document.addEventListener('click', clickAnim);
    }, []);

    return (
        <Wrapper id='cursor' style={{ top: y, left: x }} className={animClass}></Wrapper>
    );
};

export default Cursor;
