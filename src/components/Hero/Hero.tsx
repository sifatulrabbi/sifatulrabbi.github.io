import React from 'react';
import { Wrapper } from './hero.styles';
import { H1, Caption, Body1 } from '../Typography';
import Button from '../Button';
import { gotoSection } from '../../utils';

const Hero: React.FC = () => {
  const handleCTAClick = (): void => {
    gotoSection('work');
  };

  return (
    <Wrapper>
      <Caption big gutterBottom>
        Hello, my name is
      </Caption>
      <H1>Sifatul Rabbi</H1>
      <H1 secondary>
        I build Scalable
        <br />
        Web Apps
      </H1>
      <Body1 secondary classes='hero-desc'>
        A passionate Web developer from Bangladesh. Currently working as a
        freelancer. Expert in JavaScript and CSS. Experienced in front-end and
        API development. My primary goal is to explore the web development world
      </Body1>
      <Button label='See my works' big callBack={handleCTAClick} />
    </Wrapper>
  );
};

export default Hero;
