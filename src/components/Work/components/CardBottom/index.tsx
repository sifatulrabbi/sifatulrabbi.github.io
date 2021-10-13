import React, { Component } from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';
import { Caption } from '../../../Typography';

interface Props {
  tags: string[];
  links: {
    icon: IconType;
    link: string;
  }[];
  reverse?: boolean;
}
interface State {}

const Bottom = styled.div<{ reverse?: boolean }>``;

class CardBottom extends Component<Props, State> {
  openLink(link: string) {
    window.open(link, '_blank');
  }

  render() {
    return (
      <Bottom>
        <div className='tags'>
          {this.props.tags.map((tag) => (
            <Caption key={`${tag}${Math.random() * 1000}`} secondary>
              {tag}
            </Caption>
          ))}
        </div>
        <div className='links'>
          {this.props.links.map((link) => (
            <button
              key={`${link.link}${Math.random() * 1000}`}
              onClick={() => this.openLink(link.link)}
            >
              <link.icon />
            </button>
          ))}
        </div>
      </Bottom>
    );
  }
}

export default CardBottom;
