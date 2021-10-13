import React, { Component } from 'react';
import { BGImg } from './styles';

interface Props {
  img: string;
}
interface State {}

class CardImg extends Component<Props, State> {
  render() {
    return <BGImg img={this.props.img}></BGImg>;
  }
}

export default CardImg;
