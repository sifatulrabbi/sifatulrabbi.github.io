import React from 'react';
import { logo } from '../../images';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaJs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const links = {
    github: 'https://github.com/temujins',
    linkedIn: 'https://www.linkedin.com/in/sifatul-rabbi-6548b921b',
    facebook: 'https://facebook.com/ttemijnRabbi',
    twitter: 'https://twitter.com/sifatul_rabbi',
    gitRepo: 'https://github.com/temujins/temujins.github.io',
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer_pageLinks">
                <Link to="/" className="footer_pageLinks_btn">
                    Home
                </Link>
                <Link to="/#projects" className="footer_pageLinks_btn">
                    Projects
                </Link>
                <Link to="/#contact" className="footer_pageLinks_btn">
                    Contact
                </Link>
                <Link to="/#about" className="footer_pageLinks_btn">
                    About
                </Link>
            </div>
            <div className="footer_socialLinks">
                <div
                    className="footer_socialLinks_btn"
                    onClick={() => window.open(links.github, '_blank')}
                >
                    <FaGithub />
                </div>
                <div
                    className="footer_socialLinks_btn"
                    onClick={() => window.open(links.linkedIn, '_blank')}
                >
                    <FaLinkedin />
                </div>
                <div
                    className="footer_socialLinks_btn"
                    onClick={() => window.open(links.twitter, '_blank')}
                >
                    <FaTwitter />
                </div>
                <div
                    className="footer_socialLinks_btn"
                    onClick={() => window.open(links.facebook, '_blank')}
                >
                    <FaFacebook />
                </div>
            </div>
            <div className="footer_copyright">
                <p>
                    Build with ❤️, <FaJs className="emoji" /> and{' '}
                    <FaGithub className="emoji" /> by{' '}
                    <span
                        className="footer_link"
                        onClick={() => window.open(links.github, '_blank')}
                    >
                        temujins
                    </span>
                </p>
                <p>Copyright {'(c)'} 2021 Sifatul Rabbi</p>
            </div>
            <div className="footer_issueMsg">
                find any issue? fix it{' '}
                <span
                    className="footer_link"
                    onClick={() => window.open(links.gitRepo, '_blank')}
                >
                    Github_repo
                </span>
            </div>
        </div>
    );
};

export default Footer;
