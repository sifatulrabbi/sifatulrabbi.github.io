import React, { useState, useEffect } from 'react';
import { logoWhite as logo } from '../../images';
import { NavLink } from 'react-router-dom';

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
            <nav className="navbar_linksList">
                <NavLink className="navbar_linksList_item" to="/">
                    Home
                </NavLink>
                <NavLink className="navbar_linksList_item" to="#projects">
                    Projects
                </NavLink>
                <NavLink className="navbar_linksList_item" to="#contact">
                    Contact
                </NavLink>
                <NavLink className="navbar_linksList_item" to="#about">
                    About
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
