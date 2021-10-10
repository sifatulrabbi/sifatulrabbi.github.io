import React, { useState, useEffect } from 'react';
import { Wrapper } from './navbar.styles';
import { logo } from '../../images';
import { Caption } from '../Typography';
import scrollDetect from '../../utils/scrollDetect';

interface Props {}
type ILinkItems = {
  id: string;
  name: string;
}[];

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

  const updateHide = () => {
    setShow(scrollDetect());

    if (document.documentElement.scrollTop > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', updateHide);
  }, []);

  return (
    <Wrapper show={show} shrink={shrink}>
      <img className='navbar-logo' src={logo} alt='logo' />
      <ul className='navbar-list'>
        {linkItems.map((item) => (
          <li key={item.id}>
            <button className='navbar-list-btn'>
              <Caption classes='navbar-list-btn-label'>
                {item.name}
                <span className='colored'>{'()'}</span>
              </Caption>
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Navbar;
