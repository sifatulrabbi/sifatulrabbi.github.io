import React, { useState, useEffect } from 'react';
import { Wrapper } from './navbar.styles';
import { logo } from '../../images';
import { Link } from 'react-router-dom';

type HandleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => void;

let prevScroll: number = 0;

const openLink = () => {
    window.open('mailto:mdsifatulislam.rabbi@gmail.com', '_blank');
};

const Navbar: React.FC = () => {
    const [show, setShow] = useState<boolean>(true);

    const detectScroll = () => {
        const scroll = document.documentElement.scrollTop;

        if (document.documentElement.scrollWidth > 1199) {
            setShow(true);
            prevScroll = scroll;
            return;
        }

        if (scroll > prevScroll) {
            setShow(false);
        } else {
            setShow(true);
        }

        prevScroll = scroll;
    };

    useEffect(() => {
        window.addEventListener('scroll', detectScroll);
    }, []);

    const handleClick: HandleClick = (e) => {
        e.preventDefault();

        if (e.currentTarget.dataset.goto === 'works') {
            const div = document.getElementById('works')?.getBoundingClientRect().y;
            div && document.documentElement.scrollTo(0, div);
        } else if (e.currentTarget.dataset.goto === 'skills') {
            const div = document.getElementById('skills')?.getBoundingClientRect().y;
            div && document.documentElement.scrollTo(0, div);
        }
    };

    return (
        <Wrapper show={show}>
            <ul>
                <li>
                    <Link
                        className='navLink'
                        to='/'
                        data-goto='works'
                        onClick={handleClick}
                    >
                        work
                    </Link>
                </li>
                <li>
                    <Link
                        className='navLink'
                        to='/'
                        data-goto='skills'
                        onClick={handleClick}
                    >
                        skills
                    </Link>
                </li>
                <li>
                    <button className='navLink' onClick={openLink}>
                        contact
                    </button>
                </li>
                <li>
                    <Link className='navLink logo' to='/'>
                        <img src={logo} alt='' />
                    </Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Navbar;
