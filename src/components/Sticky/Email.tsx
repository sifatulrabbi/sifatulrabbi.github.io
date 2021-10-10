import React, { Component } from 'react';
import { EmailWrapper } from './styles';
import { Caption } from '../Typography';

interface Props {}
interface State {}

class Email extends Component<Props, State> {
  gotoLink() {
    window.location.href = 'mailto:mdsifatulislam.rabbi@gmail.com';
  }

  render() {
    return (
      <EmailWrapper>
        <button onClick={this.gotoLink}>
          <Caption secondary>mdsifatulislam.rabbi@gmail.com</Caption>
        </button>
      </EmailWrapper>
    );
  }
}

export default Email;
