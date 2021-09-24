import React from 'react';
import { Wrapper } from './navbar.styles';
import { logo } from '../../images';
import { Link } from 'react-router-dom';

const openLink = () => {
    window.open('mailto:mdsifatulislam.rabbi@gmail.com', '_blank');
};

const Navbar: React.FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link className='navLink' to='/'>
                        work
                    </Link>
                </li>
                <li>
                    <Link className='navLink' to='/'>
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
