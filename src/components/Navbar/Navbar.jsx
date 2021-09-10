import React from 'react';
import { logo } from '../../images';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Sifatul" />
      </div>
      <nav>
        <ul className="navbar_linksList">
          <li className="navbar_linkList_item">Home</li>
          <li className="navbar_linkList_item">Projects</li>
          <li className="navbar_linkList_item">Contact</li>
          <li className="navbar_linkList_item">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
