import React, { useState } from 'react';
import { SocialLinksWrapper } from './styles';
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook } from 'react-icons/fi';

const SocialLinks: React.FC = () => {
  const [links] = useState([
    { icon: FiGithub, link: 'https://github.com/temujins' },
    { icon: FiLinkedin, link: 'https://linkedin.com/in/' },
    { icon: FiTwitter, link: 'https://twitter.com/sifatul_rabbi/' },
    { icon: FiFacebook, link: 'https://facebook.com/ttemujinRabbi' },
  ]);

  const gotoLink = (link: string): void => {
    window.open(link, '_blank');
  };

  return (
    <SocialLinksWrapper>
      {links.map((link) => (
        <button key={link.link} onClick={() => gotoLink(link.link)}>
          <link.icon />
        </button>
      ))}
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
