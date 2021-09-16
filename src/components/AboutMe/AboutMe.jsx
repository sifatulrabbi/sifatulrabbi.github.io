import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Title from '../Title/Title';

const links = {
    github: 'https://github.com/temujins',
    linkedIn: 'https://www.linkedin.com/in/sifatul-rabbi-6548b921b',
    facebook: 'https://facebook.com/ttemijnRabbi',
};

const AboutMe = () => {
    return (
        <section id="about" className="aboutMe">
            <Title title="Me & Myself" />
            <div className="aboutMe_content">
                <img className="aboutMe_content_img" src="" alt="sifatul" />
                <div className="aboutMe_content_myself">
                    <p className="aboutMe_content_myself_text">I'm</p>
                    <h2 className="aboutMe_content_myself_text big">
                        Md Sifatul Islam Rabbi
                    </h2>
                    <p className="aboutMe_content_myself_text">
                        Self-taught and a passionate web developer from Bangladesh. I'm
                        currently working as a freelancer. I always love technology, and I
                        like building things. My web development journey started as I was
                        trying to understand why some website doesn't look good on a
                        mobile phone. Then I learned about HTML, CSS, and JavaScript. I
                        learned how I could use these web technologies to build my
                        websites and started loving web development. As a web developer, I
                        love the ReactJS framework not only that I prefer styling my
                        website with custom CSS codes. I make sure to use the latest and
                        best practices. I'm focused on the front-end and creating the best
                        and smoothest UI for websites.
                    </p>
                </div>
                <div className="aboutMe_content_links">
                    <button
                        className="aboutMe_content_links_btn"
                        onClick={() => window.open(links.github, '_blank')}
                    >
                        <FaGithub />
                    </button>
                    <button
                        className="aboutMe_content_links_btn"
                        onClick={() => window.open(links.linkedIn, '_blank')}
                    >
                        <FaLinkedin />
                    </button>
                    <button
                        className="aboutMe_content_links_btn"
                        onClick={() => window.open(links.facebook, '_blank')}
                    >
                        <FaFacebook />
                    </button>
                    <button className="aboutMe_content_links_btn big">Resume</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
