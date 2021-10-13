import React, { Component } from 'react';
import { Title } from './styles';
import { Caption, H4 } from '../../../Typography';

interface Props {
  title: string;
  reverse?: boolean;
}
interface State {}

class CardTitle extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Title reverse={this.props.reverse}>
        <Caption>Featured Project</Caption>
        <H4>{this.props.title}</H4>
      </Title>
    );
  }
}

export default CardTitle;
