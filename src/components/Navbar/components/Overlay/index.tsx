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
  height: 120vh;
  width: 100vh;
  z-index: -2;
  background-color: ${({ theme }) => theme.palette.transDark};
  transition: ${({ theme }) => theme.transition('transform')};
  transform: ${({ active }) =>
    active ? `translate(0%, 0%)` : `translate(150%, 0%)`};
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
