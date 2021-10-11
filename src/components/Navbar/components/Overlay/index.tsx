import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
  setActive: (arg: boolean) => void;
}
interface State {}

const Wrapper = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vh;
  z-index: -1;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  ${({ active }) => (active ? `display: block;` : `display: none`)}
`;

class Overlay extends Component<Props, State> {
  handleClick() {
    this.props.setActive(false);
  }

  render() {
    return (
      <Wrapper
        active={this.props.active}
        onClick={this.handleClick.bind(this)}
      />
    );
  }
}

export default Overlay;
