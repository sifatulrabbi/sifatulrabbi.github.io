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

  const showResume = (): void => {
    window.open(
      'https://drive.google.com/file/d/1HnKbiQcQ4_K9DahNIV5au2As0Htr4Ojf/view?usp=sharing',
      '_blank'
    );
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
      <Button label='Resume' callBack={showResume} />
    </Wrapper>
  );
};

export default NavMenu;
