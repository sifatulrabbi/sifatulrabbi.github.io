import React from 'react';
import { Wrapper } from './about.styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Body1, Caption } from '../Typography';
import data from './data';
import { FiChevronRight } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';

const About: React.FC = () => {
  return (
    <Wrapper>
      <SectionTitle label={'About Me'} index={2} />
      <article className='grid'>
        <div className='about-me'>
          <Body1 secondary>
            I'm Md Sifatul Islam Rabbi, self-taught and a passionate web
            developer from Bangladesh. I'm currently working as a freelancer.
            <br />
            <br />I always love technology, and I like building things. My web
            development journey started as I was trying to understand why some
            website doesn't look good on a mobile phone. Then I learned about
            HTML, CSS, and JavaScript. I learned how I could use these web
            technologies to build my websites and started loving web
            development.
            <br />
            <br />
            As a web developer, I love the ReactJS framework not only that I
            prefer styling my website with custom CSS codes. I make sure to use
            the latest and best practices. I'm focused on the front-end and
            creating the best and smoothest UI for websites.
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
