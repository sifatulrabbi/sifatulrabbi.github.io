import React from 'react';
import { Wrapper } from './navbar.styles';
import { logo } from '../../images';

const Navbar: React.FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <button>
                        <img src={logo} alt='' />
                    </button>
                </li>
                <li>
                    <button>work</button>
                </li>
                <li>
                    <button>contact</button>
                </li>
                <li>
                    <button>skills</button>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Navbar;
