import React, { useState, useEffect } from 'react';
import { Wrapper } from './navbar.styles';
import { NavMenu, NavMenuBtn, Overlay } from './components';
import { logo } from '../../images';
import scrollDetect from '../../utils/scrollDetect';

interface Props {}
export type ILinkItems = { id: string; name: string }[];

const Navbar: React.FC<Props> = () => {
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
  const [show, setShow] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  const updateHide = () => {
    setShow(scrollDetect());

    if (document.documentElement.scrollTop > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  const handleMenuClick = (): void => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('scroll', updateHide);
  }, []);

  return (
    <Wrapper show={show} shrink={shrink}>
      <img className='navbar-logo' src={logo} alt='logo' />
      <NavMenu active={active} linkItems={linkItems} />
      <NavMenuBtn active={active} handleClick={handleMenuClick} />
      <Overlay active={active} setActive={setActive} />
    </Wrapper>
  );
};

export default Navbar;
