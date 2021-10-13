import React, { Component } from 'react';
import { Card } from './styles';
import CardBottom from '../CardBottom';
import CardDesc from '../CardDesc';
import CardImg from '../CardImg';
import CardTitle from '../CardTitle';
import type { WorksData } from '../../data';

interface Props {
  reverse: boolean;
  work: WorksData;
}
interface State {}

class WorkCard extends Component<Props, State> {
  render() {
    const { reverse, work } = this.props;
    return (
      <Card reverse={reverse}>
        <div className='img-wrapper'>
          <CardImg img={work.img} />
        </div>
        <div className='content-wrapper'>
          <CardTitle title={work.name} reverse={reverse} />
          <CardDesc desc={work.desc} reverse={reverse} />
          <CardBottom tags={work.tags} links={work.links} reverse={reverse} />
        </div>
      </Card>
    );
  }
}

export default WorkCard;
