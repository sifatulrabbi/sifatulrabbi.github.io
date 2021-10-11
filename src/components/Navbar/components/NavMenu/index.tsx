import React, { Component } from 'react';
import { Wrapper } from './styles';
import { Caption } from '../../../Typography';
import type { ILinkItems } from '../../Navbar';

interface Props {
  active: boolean;
  linkItems: ILinkItems;
}
interface State {}

class NavMenu extends Component<Props, State> {
  render() {
    const { active, linkItems } = this.props;

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
      </Wrapper>
    );
  }
}

export default NavMenu;
