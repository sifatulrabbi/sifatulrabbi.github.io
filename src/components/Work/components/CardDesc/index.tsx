import React, { Component } from 'react';
import styled from 'styled-components';
import { Body2 } from '../../../Typography';

interface Props {
  desc: string;
  reverse?: boolean;
}
interface State {}

const Desc = styled.div<{ reverse?: boolean }>``;

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
