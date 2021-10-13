import React, { Component } from 'react';
import { Wrapper } from './work.styles';
import data, { WorksData } from './data';
import SectionTitle from '../SectionTitle/SectionTitle';
import { WorkCard } from './components';

interface Props {}
interface State {
  works: WorksData[];
}

class Works extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      works: data,
    };
  }

  render() {
    return (
      <Wrapper>
        <SectionTitle label="Things I've built" index={1} />
        <div className='cards'>
          {this.state.works.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              reverse={index === 1 ? true : false}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default Works;
