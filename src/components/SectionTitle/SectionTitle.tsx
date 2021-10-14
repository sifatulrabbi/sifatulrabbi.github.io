import React from 'react';
import { Header } from './sectionTitle.styles';
import { Caption, H3 } from '../Typography';

interface Props {
  label: string;
  index: number;
}

const SectionTitle: React.FC<Props> = ({ label, index }) => {
  return (
    <Header>
      <H3 classes='label'>
        <Caption classes='colored'>0{index}.</Caption> {label}
      </H3>
    </Header>
  );
};

export default SectionTitle;
