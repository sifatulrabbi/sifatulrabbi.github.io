import React, { useState, useEffect } from 'react';
import { Wrapper } from './navbar.styles';
import { logo } from '../../images';
import { goto, scrollDetect } from '../../functions';

const Navbar: React.FC = () => {
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        document.addEventListener('scroll', function () {
            setShow(scrollDetect());
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper show={show}>
            <ul>
                <li className='navLink' onClick={goto.worksSection}>
                    work
                </li>
                <li className='navLink' onClick={goto.skillsSection}>
                    skills
                </li>
                <li>
                    <button className='navLink' onClick={goto.mailTo}>
                        contact
                    </button>
                </li>
                <li className='navLink logo' onClick={goto.reload}>
                    <img src={logo} alt='' />
                </li>
            </ul>
        </Wrapper>
    );
};

export default Navbar;
