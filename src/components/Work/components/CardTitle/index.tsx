import React, { Component } from 'react';
import styled from 'styled-components';
import { Caption, H4 } from '../../../Typography';

interface Props {
  title: string;
  reverse?: boolean;
}
interface State {}

const Title = styled.div<{ reverse?: boolean }>``;

class CardTitle extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Title>
        <Caption>Featured Project</Caption>
        <H4>{this.props.title}</H4>
      </Title>
    );
  }
}

export default CardTitle;
