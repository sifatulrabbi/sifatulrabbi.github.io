import React from 'react';
import { Wrapper } from './hero.styles';
import { H1, Caption, Body1 } from '../Typography';
import Button from '../Button';

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Caption big gutterBottom>
        Hello, my name is
      </Caption>
      <H1>Sifatul Rabbi</H1>
      <H1 secondary>I do web development</H1>
      <Body1 secondary classes='hero-desc'>
        I'm a self-taught and passionate web developer from Bangladesh.
        Currently working as a freelancer. I'm focused on the front-end and
        creating the best and smoothest UI for websites.
      </Body1>
      <Button label='See my works' big callBack={(e) => e} />
    </Wrapper>
  );
};

export default Hero;
