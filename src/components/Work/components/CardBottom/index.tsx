import React from 'react';
import { Bottom } from './styles';
import { Caption } from '../../../Typography';
import { v4 as uuid } from 'uuid';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Props {
  tags: string[];
  links: {
    github: string;
    external: string;
  };
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
        <button onClick={() => openLink(links.github)} className='btn'>
          <FiGithub className='btn-icon' />
        </button>
        {links.external && (
          <button onClick={() => openLink(links.external)} className='btn'>
            <FiExternalLink className='btn-icon' />
          </button>
        )}
      </div>
    </Bottom>
  );
};

export default CardBottom;
