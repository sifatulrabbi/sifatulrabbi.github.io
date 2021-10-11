import React, { Component } from 'react';
import { Header } from './sectionTitle.styles';
import { Caption, H3 } from '../Typography';

interface Props {
  label: string;
  index: number;
}
interface State {}

class SectionTitle extends Component<Props, State> {
  render() {
    const { label, index } = this.props;

    return (
      <Header>
        <H3 classes='label'>
          <Caption classes='colored'>0{index}.</Caption> {label}
        </H3>
      </Header>
    );
  }
}

export default SectionTitle;
