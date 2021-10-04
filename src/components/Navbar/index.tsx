import React from 'react';
import { Wrapper } from './navar.styles';
import { logo } from '../../images';
interface Props {
  showSet: () => void;
}

class Navbar extends React.Component<Props> {
  render() {
    const { showSet } = this.props;
    return (
      <Wrapper>
        <img className='navbar_logo' src={logo} alt='logo' />
        <button className='navbar_button' onClick={showSet}>
          show
        </button>
      </Wrapper>
    );
  }
}

export default Navbar;
