import React from 'react';
import { Title } from './styles';
import { Caption, H4 } from '../../../Typography';

interface Props {
  title: string;
  reverse?: boolean;
}

const CardTitle: React.FC<Props> = ({ title, reverse }) => {
  return (
    <Title reverse={reverse}>
      <Caption>Featured Project</Caption>
      <H4>{title}</H4>
    </Title>
  );
};

export default CardTitle;
