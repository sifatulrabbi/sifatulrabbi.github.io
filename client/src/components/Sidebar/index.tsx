import React from 'react';
import { Wrapper } from './sidebar.styles';

interface Props {
  show: boolean;
}

class Sidebar extends React.Component<Props> {
  render() {
    const { show } = this.props;

    return <Wrapper className={show ? 'show' : 'hide'}></Wrapper>;
  }
}

export default Sidebar;
