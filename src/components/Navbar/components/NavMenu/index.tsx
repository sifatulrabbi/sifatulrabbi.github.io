import React from 'react';
import { Wrapper } from './styles';
import { Caption } from '../../../Typography';
import type { ILinkItems } from '../../Navbar';
import Button from '../../../Button';

interface Props {
  active: boolean;
  linkItems: ILinkItems;
}

const NavMenu: React.FC<Props> = ({ active, linkItems }) => {
  return (
    <Wrapper active={active}>
      {linkItems.map((item) => (
        <li key={item.id}>
          <button className='list-btn'>
            <Caption classes='list-label'>
              {item.name}
              <span className='colored'>{'()'}</span>
            </Caption>
          </button>
        </li>
      ))}
      <Button label='Resume' />
    </Wrapper>
  );
};

export default NavMenu;
