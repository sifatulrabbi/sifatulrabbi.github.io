import React, { Component } from 'react';
import { Wrapper } from './styles';

interface Props {
  active: boolean;
  handleClick: () => void;
}
interface State {}

class NavMenuBtn extends Component<Props, State> {
  render() {
    const { active, handleClick } = this.props;

    return (
      <Wrapper active={active} onClick={handleClick}>
        <span className='bar big' />
        <span className='bar small' />
      </Wrapper>
    );
  }
}

export default NavMenuBtn;
