import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    z-index: 2500;
    transform: translate(-50%, -50%) rotate(-20deg);
    pointer-events: none;
    transition: all 0.1s ease-out;
    height: 5rem;
    width: 5rem;
    border: 1px solid ${(p) => p.theme.palette.font.primary};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: anim 1s linear infinite;

    @media screen and (max-width: 1100px) {
        display: none;
    }

    &.showAnim {
        animation: clickAnim 300ms ease-out;
    }

    @keyframes anim {
        0%,
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.3);
        }
        70% {
            transform: translate(-50%, -50%) scale(0.8);
        }
    }

    @keyframes clickAnim {
        0%,
        100% {
            transform: translate(-50%, -50%) scale(1);
            border-color: ${(p) => p.theme.palette.font.secondary};
        }
        50% {
            transform: translate(-50%, -50%) scale(3);
            border-color: ${(p) => p.theme.palette.primary};
        }
    }
`;

const Cursor: React.FC = () => {
    const [y, setY] = useState<number>(100);
    const [x, setX] = useState<number>(100);
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
