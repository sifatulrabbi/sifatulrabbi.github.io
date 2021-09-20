import React from 'react';
import './hero.scss';
import { bgIllustration } from '../../images';
import { FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_content">
                <h1 className="hero_heading">
                    <div>
                        Minimal
                        <span style={{ marginLeft: '.2em' }}>and</span>
                    </div>
                    <div>Responsive</div>
                    <div className="hero_heading-colored">websites</div>
                </h1>
                <p className="hero_subHeading">
                    A passionate and enthusiastic web developer waiting to build websites
                    with any features you want
                </p>
                <div className="hero_cta">
                    <button className="hero_cta_btn">
                        Contact Now <FaEnvelope />
                    </button>
                </div>
            </div>
            <img className="hero_bgArt" src={bgIllustration} alt="" />
        </section>
    );
};

export default Hero;
