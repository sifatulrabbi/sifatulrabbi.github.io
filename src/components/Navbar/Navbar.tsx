import React, { useState, useEffect } from 'react';
import { Wrapper } from './navbar.styles';
import { logo } from '../../images';
import { Link } from 'react-router-dom';

type HandleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => void;

const openLink = () => {
    window.open('mailto:mdsifatulislam.rabbi@gmail.com', '_blank');
};

let prevScroll = 0;

const handleClick: HandleClick = (e) => {
    e.preventDefault();

    if (e.currentTarget.dataset.goto === 'works') {
        const div = document.getElementById('works');
        div && div.scrollIntoView();
    } else if (e.currentTarget.dataset.goto === 'skills') {
        const div = document.getElementById('skills');
        div && div.scrollIntoView();
    }
};

const Navbar: React.FC = () => {
    const [show, setShow] = useState<boolean>(true);

    const detectScroll = () => {
        const scroll = document.documentElement.scrollTop;

        if (document.documentElement.scrollWidth > 1199) {
            setShow(true);
            return;
        }

        scroll > prevScroll ? setShow(false) : setShow(true);

        prevScroll = scroll;
    };

    useEffect(() => {
        document.addEventListener('scroll', detectScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <li className='navLink logo' onClick={() => (window.location.href = '/')}>
                    <img src={logo} alt='' />
                </li>
            </ul>
        </Wrapper>
    );
};

export default Navbar;
