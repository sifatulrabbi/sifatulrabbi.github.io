import React, { Component } from 'react';
import { Wrapper } from './about.styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Body1 } from '../Typography';

interface Props {}
interface State {}

class About extends Component<Props, State> {
  render() {
    return (
      <Wrapper>
        <SectionTitle label={'About Me'} index={1} />
        <article className='grid'>
          <Body1 classes='about-me' secondary>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
            <br />
            <br />
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
            <br />
            <br />
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </Body1>
          <div className='imgWrapper'></div>
        </article>
      </Wrapper>
    );
  }
}

export default About;
