import React from 'react';
import { heroImg } from '../../images';
import Title from '../Title';
import { Wrapper } from './hero.styles';

interface Props {}

class Hero extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        <Title variant='h1' text={`Hello I'm<br/> Sifatul Rabbi`} />
        <div className='spacer' />
        <Title variant='h3' text='Web Developer UI/UX Designer' />
        <button className='scrollBtn'>Scroll</button>
        <img className='heroImg' src={heroImg} alt='hero' />
      </Wrapper>
    );
  }
}

export default Hero;
