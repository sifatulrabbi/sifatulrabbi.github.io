import React from 'react';
import { Wrapper } from './footer.styles';

const openGithub = () => {
    window.open('https://github.com/temujins', '_blank');
};

const openFacebook = () => {
    window.open('https://facebook.com/ttemujinRabbi', '_blank');
};

const openEmail = () => {
    window.open('mailto:mdsifatulislam.rabbi@gmail.com', '_blank');
};

const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/sifatul-rabbi-6548b921b/', '_blank');
};

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <div className='container'>
                <ul className='footerLinks'>
                    <li>
                        <button onClick={openGithub}>Github</button>
                    </li>
                    <li>
                        <button onClick={openFacebook}>Facebook</button>
                    </li>
                    <li>
                        <button onClick={openEmail}>Email</button>
                    </li>
                    <li>
                        <button onClick={openLinkedIn}>LinkedIn</button>
                    </li>
                </ul>
                <div className='copyright'>
                    <span>Build with love and TypeScript by me</span>
                    <button>Go to top</button>
                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;
