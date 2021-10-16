import React from 'react';
import { Wrapper } from './styles';
import { Caption } from '../../../Typography';
import type { Data } from '../../data';
import Button from '../../../Button';
import { gotoSection } from '../../../../utils';

interface Props {
  active: boolean;
  linkItems: Data;
  setSidebarActive: (arg: boolean) => void;
}

const NavMenu: React.FC<Props> = ({ active, linkItems, setSidebarActive }) => {
  const handleClick = (id: string) => {
    setSidebarActive(false);

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
