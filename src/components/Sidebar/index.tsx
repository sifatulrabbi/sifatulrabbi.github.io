import React from 'react';
import { Wrapper } from './sidebar.styles';
import Navbar from './components/Navbar';

interface Props {
  show: boolean;
}

class Sidebar extends React.Component<Props> {
  render() {
    const { show } = this.props;

    return (
      <Wrapper className={show ? 'show' : 'hide'}>
        <Navbar />
      </Wrapper>
    );
  }
}

export default Sidebar;
