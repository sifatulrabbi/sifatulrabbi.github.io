import React, { Component } from 'react';
import { Wrapper } from './contact.styles';
import { Caption, H2, Body1 } from '../Typography';
import Button from '../Button';

interface Props {}
interface State {}

class Contact extends Component<Props, State> {
  render() {
    return (
      <Wrapper>
        <Caption big>03. What's next?</Caption>
        <H2 classes='contact-title'>Get in touch</H2>
        <Body1 classes='contact-desc' secondary>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </Body1>
        <Button big label='Say Hello!' classes='contact-btn' />
      </Wrapper>
    );
  }
}

export default Contact;
