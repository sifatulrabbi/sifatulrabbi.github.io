import React, { Component } from 'react';
import { Desc } from './styles';
import { Body2 } from '../../../Typography';

interface Props {
  desc: string;
  reverse: boolean;
}
interface State {}

class CardDesc extends Component<Props, State> {
  render() {
    return (
      <Desc reverse={this.props.reverse}>
        <Body2 secondary>{this.props.desc}</Body2>
      </Desc>
    );
  }
}

export default CardDesc;
