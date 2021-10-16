import React from 'react';
import { Wrapper } from './styles';
import { Caption } from '../../../Typography';
import type { ILinkItems } from '../../Navbar';
import Button from '../../../Button';
import { gotoSection } from '../../../../utils';

interface Props {
  active: boolean;
  linkItems: ILinkItems;
  handleMenuClick: () => void;
}

const NavMenu: React.FC<Props> = ({ active, linkItems, handleMenuClick }) => {
  const handleClick = (id: string) => {
    handleMenuClick();

    setTimeout(() => {
      gotoSection(id);
    }, 200);
  };

  return (
    <Wrapper active={active}>
      {linkItems.map((item) => (
        <li key={item.id}>
          <button className='list-btn' onClick={() => handleClick(item.id)}>
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
