import React from 'react';
import { Wrapper } from './contact.styles';
import { Caption, H2, Body1 } from '../Typography';
import Button from '../Button';

const Contact: React.FC = () => {
  const handleSayHello = (): void => {
    window.location.href = 'mailto:mdsifatulislam.rabbi@gmail.com';
  };

  return (
    <Wrapper id='contact'>
      <Caption big>03. What's next?</Caption>
      <H2 classes='contact-title'>Let's build something amazing</H2>
      <Body1 classes='contact-desc' secondary>
        I'm always excited to learn more and build awesome projects. If you have
        any projects in mind feel free to leave me a hi. I will get back to you
        as soon as possible!
      </Body1>
      <Button
        big
        label='Say Hello!'
        classes='contact-btn'
        callBack={handleSayHello}
      />
    </Wrapper>
  );
};

export default Contact;
