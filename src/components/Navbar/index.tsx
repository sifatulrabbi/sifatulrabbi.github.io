import React from 'react';
import { Wrapper, MenuIcon } from './navbar.styles';
import { logo } from '../../images';

interface Props {
  showSet: () => void;
  show: boolean;
}

class Navbar extends React.Component<Props> {
  render() {
    const { showSet, show } = this.props;

    return (
      <Wrapper>
        <img className='navbar_logo' src={logo} alt='logo' />
        <button className='navbar_button' onClick={showSet}>
          <MenuIcon show={show}>
            <span className='bar top' />
            <span className='bar center' />
            <span className='bar bottom' />
          </MenuIcon>
        </button>
      </Wrapper>
    );
  }
}

export default Navbar;
