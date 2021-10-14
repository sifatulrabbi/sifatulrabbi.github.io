import React, { useState } from 'react';
import { Wrapper } from './work.styles';
import data, { WorksData } from './data';
import SectionTitle from '../SectionTitle/SectionTitle';
import { WorkCard } from './components';
import { v4 as uuid } from 'uuid';

type Work = WorksData[];

const Works: React.FC = () => {
  const [works] = useState<Work>(data);

  return (
    <Wrapper>
      <SectionTitle label="Things I've built" index={1} />
      <div className='cards'>
        {works.map((work, index) => (
          <WorkCard key={uuid()} work={work} reverse={index % 2 !== 0} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Works;
