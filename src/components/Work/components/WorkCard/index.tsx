import React, { Component } from 'react';
import styled from 'styled-components';
import CardBottom from '../CardBottom';
import CardDesc from '../CardDesc';
import CardImg from '../CardImg';
import CardTitle from '../CardTitle';
import type { WorksData } from '../../data';

interface Props {
  reverse?: boolean;
  work: WorksData;
}
interface State {}

/**
 * TODO: card image and description will overlap
 * TODO: card has a reversed style for every next card in the section
 */
const Card = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-areas:
    'image'
    'content';
  grid-template-columns: 1fr;
  position: relative;

  .img-wrapper {
    grid-area: image;
  }

  .content-wrapper {
    grid-area: content;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    ${({ reverse }) =>
      !reverse
        ? `grid-template-areas: 'image content'; grid-template-columns: 1.3fr 1fr;`
        : `grid-template-areas: 'content image'; grid-template-columns: 1fr 1.3fr;`}
  }
`;

class WorkCard extends Component<Props, State> {
  render() {
    const { reverse, work } = this.props;
    return (
      <Card reverse={reverse}>
        <div className='img-wrapper'>
          <CardImg img={''} />
        </div>
        <div className='content-wrapper'>
          <CardTitle title={work.name} reverse={reverse} />
          <CardDesc desc={work.desc} />
          <CardBottom tags={work.tags} links={work.links} />
        </div>
      </Card>
    );
  }
}

export default WorkCard;
