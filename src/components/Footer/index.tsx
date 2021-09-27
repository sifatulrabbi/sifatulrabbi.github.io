import React from 'react';
import { Wrapper } from './footer.styles';
import { goto } from '../../functions';

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <div className='container'>
                <ul className='footerLinks'>
                    <li>
                        <button onClick={goto.github}>Github</button>
                    </li>
                    <li>
                        <button onClick={goto.facebook}>Facebook</button>
                    </li>
                    <li>
                        <button onClick={goto.mailTo}>Email</button>
                    </li>
                    <li>
                        <button onClick={goto.linkedIn}>LinkedIn</button>
                    </li>
                </ul>
                <div className='copyright'>
                    <span>Build with love and TypeScript by me</span>
                    <button onClick={goto.top}>Go to top</button>
                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;
