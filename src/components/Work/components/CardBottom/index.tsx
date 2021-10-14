import React from 'react';
import { Bottom } from './styles';
import { IconType } from 'react-icons';
import { Caption } from '../../../Typography';
import { v4 as uuid } from 'uuid';

interface Props {
  tags: string[];
  links: {
    icon: IconType;
    link: string;
  }[];
  reverse: boolean;
}

const CardBottom: React.FC<Props> = ({ reverse, tags, links }) => {
  const openLink = (link: string): void => {
    window.open(link, '_blank');
  };

  return (
    <Bottom reverse={reverse}>
      <div className='tags'>
        {tags.map((tag) => (
          <Caption key={uuid()} secondary>
            {tag}
          </Caption>
        ))}
      </div>
      <div className='links'>
        {links.map((link) => (
          <button
            key={uuid()}
            onClick={() => openLink(link.link)}
            className='btn'
          >
            <link.icon className='btn-icon' />
          </button>
        ))}
      </div>
    </Bottom>
  );
};

export default CardBottom;
