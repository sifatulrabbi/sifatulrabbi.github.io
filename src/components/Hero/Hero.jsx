import React from 'react';
import './hero.scss';
import { bgIllustration } from '../../images';
import { FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_content">
                <h1 className="hero_heading">
                    Minimal and
                    <br />
                    <span className="hero_heading-colored">Responsive</span>
                    <br />
                    websites
                </h1>
                <h2 className="hero_subHeading">
                    Front-end web developer,
                    <br />
                    UI/UX designer
                </h2>
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
