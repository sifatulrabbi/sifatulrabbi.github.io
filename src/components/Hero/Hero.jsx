import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="hero_heading">Minimal and Responsive websites</h1>
        <h2 className="hero_subheading">
          Front-end web developer,
          <br />
          UI/UX designer
        </h2>
        <div className="hero_cta">
          <div className="hero_cta_box">mdsifatulislam.rabbi@gmail.com</div>
          <button className="hero_cta_button">Contact</button>
        </div>
      </div>
      <div className="hero_bgArt"></div>
    </div>
  );
};

export default Hero;
