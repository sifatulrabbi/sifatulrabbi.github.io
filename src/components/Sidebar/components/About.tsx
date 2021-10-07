import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {}
interface State {}

const Wrapper = styled.div``;

class About extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Wrapper></Wrapper>;
  }
}

export default About;
