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
        I am a Hard-working self-taught web developer, currently working on a
        Courier service startup. I love learning about software architecture and
        cloud-computing
      </Body1>
      <Button
        label='See my works'
        big
        callBack={handleCTAClick}
        classes='hero-btn'
      />
    </Wrapper>
  );
};

export default Hero;
