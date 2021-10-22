import React, { useState } from 'react';
import { SocialLinksWrapper } from './styles';
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook } from 'react-icons/fi';

const SocialLinks: React.FC = () => {
  const [links] = useState([
    { name: 'Github', icon: FiGithub, link: 'https://github.com/temujins' },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      link: 'https://www.linkedin.com/in/temujins/',
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      link: 'https://twitter.com/sifatul_rabbi/',
    },
    {
      name: 'Facebook',
      icon: FiFacebook,
      link: 'https://facebook.com/ttemujinRabbi',
    },
  ]);

  const gotoLink = (link: string): void => {
    window.open(link, '_blank');
  };

  return (
    <SocialLinksWrapper>
      {links.map((link) => (
        <button
          key={link.link}
          aria-label={link.name}
          onClick={() => gotoLink(link.link)}
        >
          <link.icon className='icon' />
        </button>
      ))}
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
