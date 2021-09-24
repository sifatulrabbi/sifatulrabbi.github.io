import React from 'react';
import { Wrapper } from './footer.styles';

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <div className='container'>
                <ul className='footerLinks'>
                    <li>
                        <button>Github</button>
                    </li>
                    <li>
                        <button>Facebook</button>
                    </li>
                    <li>
                        <button>Email</button>
                    </li>
                    <li>
                        <button>LinkedIn</button>
                    </li>
                </ul>
                <div className='copyright'>
                    <span>Build with love and TypeScript by temujins</span>
                    <button>Go to top</button>
                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;
