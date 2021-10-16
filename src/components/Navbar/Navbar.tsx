import React, { useState, useEffect } from 'react';
import { Wrapper } from './navbar.styles';
import { NavMenu, NavMenuBtn, Overlay } from './components';
import { logo } from '../../images';
import { scrollDetect } from '../../utils';
import data, { Data } from './data';

const Navbar: React.FC = () => {
  const [linkItems] = useState<Data>(data);
  const [shrink, setShrink] = useState<boolean>(false);
  const [navbarShow, setNavbarShow] = useState<boolean>(true);
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const updateHide = () => {
    setNavbarShow(scrollDetect());

    if (document.documentElement.scrollTop > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  const handleMenuClick = (): void => {
    setSidebarActive((prev) => !prev);
  };

  const handleIconClick = (): void => {
    window.location.href = '/';
  };

  useEffect(() => {
    document.addEventListener('scroll', updateHide);
  }, []);

  return (
    <Wrapper show={navbarShow} shrink={shrink} sidebarActive={sidebarActive}>
      <img
        className='navbar-logo'
        src={logo}
        alt='logo'
        onClick={handleIconClick}
      />
      <NavMenu
        active={sidebarActive}
        linkItems={linkItems}
        setSidebarActive={setSidebarActive}
      />
      <NavMenuBtn active={sidebarActive} handleClick={handleMenuClick} />
      <Overlay active={sidebarActive} setActive={setSidebarActive} />
    </Wrapper>
  );
};

export default Navbar;
