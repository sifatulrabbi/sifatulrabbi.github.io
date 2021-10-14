import React, { Component } from 'react';
import { Caption } from '../Typography';
import { Wrapper } from './footer.styles';

interface Props {}
interface State {}

class Footer extends Component<Props, State> {
  handleSeeSource() {
    window.open('https://github.com/temujins/temujins.github.io', '_blank');
  }

  render() {
    return (
      <Wrapper>
        <Caption secondary>Built with 💙 & TypeScript by Sifatul Rabbi</Caption>
        <button onClick={this.handleSeeSource}>
          <Caption>See source!</Caption>
        </button>
      </Wrapper>
    );
  }
}

export default Footer;
