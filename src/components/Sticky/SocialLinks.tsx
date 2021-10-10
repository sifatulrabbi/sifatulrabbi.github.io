import React, { Component } from 'react';
import { SocialLinksWrapper } from './styles';
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Props {}
interface State {
  links: {
    icon: IconType;
    link: string;
  }[];
}

class SocialLinks extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      links: [
        { icon: FiGithub, link: 'https://github.com/temujins' },
        { icon: FiLinkedin, link: 'https://linkedin.com/in/' },
        { icon: FiTwitter, link: 'https://twitter.com/sifatul_rabbi/' },
        { icon: FiFacebook, link: 'https://facebook.com/ttemujinRabbi' },
      ],
    };
  }

  gotoLink(link: string) {
    window.open(link, '_blank');
  }

  render() {
    return (
      <SocialLinksWrapper>
        {this.state.links.map((link) => (
          <button key={link.link} onClick={() => this.gotoLink(link.link)}>
            <link.icon />
          </button>
        ))}
      </SocialLinksWrapper>
    );
  }
}

export default SocialLinks;
