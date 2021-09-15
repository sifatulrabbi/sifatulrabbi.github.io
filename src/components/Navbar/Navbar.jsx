import React, { useState, useEffect } from 'react';
import { logoWhite as logo } from '../../images';

const Navbar = () => {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const unsubscribe = (window.onscroll = () => {
            document.documentElement.scrollTop > 50 ? setShadow(true) : setShadow(false);
        });

        return () => unsubscribe;
    }, []);

    return (
        <div className={`navbar ${shadow && 'showShadow'}`}>
            <div className="navbar_logo">
                <img src={logo} alt="Sifatul" />
            </div>
            <nav>
                <ul className="navbar_linksList">
                    <li className="navbar_linksList_item">Home</li>
                    <li className="navbar_linksList_item">Projects</li>
                    <li className="navbar_linksList_item">Contact</li>
                    <li className="navbar_linksList_item">About</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
