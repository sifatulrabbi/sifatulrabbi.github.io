import React from 'react';
import { Wrapper } from './navar.styles';
import { logo } from '../../images';

interface Props {
  showSet: () => void;
}

const Navbar: React.FC<Props> = ({ showSet }) => {
  return (
    <Wrapper>
      <nav className='navbar'>
        <button className='navbar_logo_button' onClick={showSet}>
          <img className='navbar_logo_button_img' src={logo} alt='logo' />
        </button>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
