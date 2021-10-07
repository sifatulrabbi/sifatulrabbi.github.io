import React, { Component } from 'react';
import styled from 'styled-components';

interface StyledProps {
  show: boolean;
}

interface Props extends StyledProps {
  setShow: (value: boolean) => void;
}

const Wrapper = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -100;
  pointer-events: none;
  ${({ show }) =>
    show &&
    `
    background-color: rgba(0, 0, 0, 0.3); 
    backdrop-filter: blur(5px);
    z-index: 100;
    pointer-events: all;
  `}
`;

class Overlay extends Component<Props> {
  handleClick = () => {
    this.props.setShow && this.props.setShow(false);
  };

  render() {
    const { show } = this.props;

    return <Wrapper show={show} onClick={this.handleClick} />;
  }
}

export default Overlay;
