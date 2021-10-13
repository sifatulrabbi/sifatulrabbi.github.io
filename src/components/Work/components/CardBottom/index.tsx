import React, { Component } from 'react';
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
interface State {}

class CardBottom extends Component<Props, State> {
  openLink(link: string) {
    window.open(link, '_blank');
  }

  render() {
    return (
      <Bottom reverse={this.props.reverse}>
        <div className='tags'>
          {this.props.tags.map((tag) => (
            <Caption key={uuid()} secondary>
              {tag}
            </Caption>
          ))}
        </div>
        <div className='links'>
          {this.props.links.map((link) => (
            <button
              key={uuid()}
              onClick={() => this.openLink(link.link)}
              className='btn'
            >
              <link.icon className='btn-icon' />
            </button>
          ))}
        </div>
      </Bottom>
    );
  }
}

export default CardBottom;
