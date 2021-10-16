import React, { useState, useEffect } from 'react';
import { Wrapper } from './navbar.styles';
import { NavMenu, NavMenuBtn, Overlay } from './components';
import { logo } from '../../images';
import { scrollDetect } from '../../utils';

export type ILinkItems = { id: string; name: string }[];

const Navbar: React.FC = () => {
  const [linkItems] = useState<ILinkItems>([
    {
      id: 'work',
      name: '.Work',
    },
    {
      id: 'about',
      name: '.About',
    },
    {
      id: 'contact',
      name: '.Contact',
    },
  ]);
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

  useEffect(() => {
    document.addEventListener('scroll', updateHide);
  }, []);

  return (
    <Wrapper show={navbarShow} shrink={shrink} sidebarActive={sidebarActive}>
      <img className='navbar-logo' src={logo} alt='logo' />
      <NavMenu
        active={sidebarActive}
        linkItems={linkItems}
        handleMenuClick={handleMenuClick}
      />
      <NavMenuBtn active={sidebarActive} handleClick={handleMenuClick} />
      <Overlay active={sidebarActive} setActive={setSidebarActive} />
    </Wrapper>
  );
};

export default Navbar;
