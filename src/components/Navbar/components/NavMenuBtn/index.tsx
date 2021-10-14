import React from 'react';
import { Wrapper } from './styles';

interface Props {
  active: boolean;
  handleClick: () => void;
}

const NavMenuBtn: React.FC<Props> = ({ active, handleClick }) => {
  return (
    <Wrapper active={active} onClick={handleClick}>
      <span className='bar big' />
      <span className='bar small' />
    </Wrapper>
  );
};

export default NavMenuBtn;
