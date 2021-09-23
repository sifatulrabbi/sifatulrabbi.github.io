import React from 'react';
import { Wrapper } from './navbar.styles';
import { logo } from '../../images';

const Navbar: React.FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <button>work</button>
                </li>
                <li>
                    <button>contact</button>
                </li>
                <li>
                    <button>skills</button>
                </li>
                <li>
                    <button>
                        <img src={logo} alt='' />
                    </button>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Navbar;
