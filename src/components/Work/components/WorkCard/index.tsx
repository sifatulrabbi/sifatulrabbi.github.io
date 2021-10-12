import React, { Component } from 'react';
import styled from 'styled-components';
import CardBottom from '../CardBottom';
import CardDesc from '../CardDesc';
import CardImg from '../CardImg';
import CardTitle from '../CardTitle';

interface Props {
  reverse?: boolean;
}
interface State {}

const Card = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

class WorkCard extends Component<Props, State> {
  render() {
    return (
      <Card reverse={this.props.reverse}>
        <div className='img-wrapper'>
          <CardImg img={''} />
        </div>
        <div className='content-wrapper'>
          <CardTitle title='Arkanoid Game' reverse={this.props.reverse} />
          <CardDesc
            desc={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.'
            }
          />
          <CardBottom
            tags={['TypeScript', 'React', 'Node.js', 'Express.js']}
            links={[]}
          />
        </div>
      </Card>
    );
  }
}

export default WorkCard;
