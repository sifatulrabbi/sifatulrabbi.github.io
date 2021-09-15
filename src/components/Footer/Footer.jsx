import React from 'react';
import { logo } from '../../images';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaJs } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer_pageLinks">
                <div className="footer_pageLinks_btn">Home</div>
                <div className="footer_pageLinks_btn">Portfolio</div>
                <div className="footer_pageLinks_btn">Contact</div>
                <div className="footer_pageLinks_btn">About</div>
            </div>
            <div className="footer_socialLinks">
                <div className="footer_socialLinks_btn">
                    <FaGithub />
                </div>
                <div className="footer_socialLinks_btn">
                    <FaLinkedin />
                </div>
                <div className="footer_socialLinks_btn">
                    <FaTwitter />
                </div>
                <div className="footer_socialLinks_btn">
                    <FaFacebook />
                </div>
            </div>
            <div className="footer_copyright">
                <p>
                    Build with ❤️, <FaJs className="emoji" /> and{' '}
                    <FaGithub className="emoji" /> by{' '}
                    <span className="footer_link">temujins</span>
                </p>
                <p>Copyright {'(c)'} 2021 Sifatul Rabbi</p>
            </div>
            <div className="footer_issueMsg">
                find any issue? fix it <span className="footer_link">Github_repo</span>
            </div>
        </div>
    );
};

export default Footer;
