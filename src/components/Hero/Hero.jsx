import React from 'react';
import Button from '../Button/Button';
import { bgIllustration } from '../../images';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="hero_heading">Minimal and Responsive websites</h1>
        <h2 className="hero_subHeading">
          Front-end web developer,
          <br />
          UI/UX designer
        </h2>
        <div className="hero_cta">
          <Button big label="mdsifatulislam.rabbi@gmail.com" />
        </div>
      </div>
      <img className="hero_bgArt" src={bgIllustration} alt="" />
    </div>
  );
};

export default Hero;