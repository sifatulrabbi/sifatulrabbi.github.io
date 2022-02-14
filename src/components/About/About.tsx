import React from 'react';
import { Wrapper } from './about.styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Body1, Caption } from '../Typography';
import data from './data';
import { FiChevronRight } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';

const About: React.FC = () => {
  return (
    <Wrapper id='about'>
      <SectionTitle label={'About Me'} index={2} />
      <article className='grid'>
        <div className='about-me'>
          <Body1 secondary>
            I'm Md Sifatul Islam Rabbi, self-taught and a passionate web
            developer from Bangladesh. I'm currently working Courier 007, an
            courier service startup in Bangladesh.
            <br />
            <br />I always loved technology, and I like building things. My web
            development journey started as I was trying to understand how to can
            we post articles in a website. The first programming language I
            leaned was JavaScript.
            <br />
            <br />
            As a developer I love the logical part more. I love writing and
            building responsive and functional websites. I am a hard working
            person and always trying to reach the new height.
            <br />
            <br />
            Here is a list of technologies I'm very good at:
          </Body1>
          <div className='skills-list'>
            {data.skills.map((skill) => (
              <div key={uuid()} className='skills-item'>
                <FiChevronRight />
                <Caption secondary>{skill}</Caption>
              </div>
            ))}
          </div>
        </div>
        <div className='imgWrapper'></div>
      </article>
    </Wrapper>
  );
};

export default About;
