import React from 'react';
import { Wrapper } from './sidebar.styles';

interface Props {
  show: boolean;
}

const Sidebar: React.FC<Props> = (props) => {
  const { show } = props;

  return <Wrapper className={show ? 'show' : 'hide'}></Wrapper>;
};

export default Sidebar;
