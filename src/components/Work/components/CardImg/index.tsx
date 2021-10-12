import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
}
interface State {}

const BGImg = styled.div<{ img: string }>`
  flex: 1;
  height: clamp(250px, 20vw, 350px);
  background-image: url();
  background-color: ${({ theme }) => theme.palette.transparent};
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center;
`;

class CardImg extends Component<Props, State> {
  render() {
    return <BGImg img={this.props.img}></BGImg>;
  }
}

export default CardImg;
