import React, { Component } from 'react';
import { Wrapper } from './work.styles';
import data, { WorksData } from './data';
import SectionTitle from '../SectionTitle/SectionTitle';

interface Props {}
interface State {
  works: WorksData;
}

class Works extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      works: data,
    };
  }

  render() {
    return (
      <Wrapper>
        <SectionTitle label="Things I've built" index={1} />
      </Wrapper>
    );
  }
}

export default Works;
