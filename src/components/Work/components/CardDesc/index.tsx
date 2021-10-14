import React from 'react';
import { Desc } from './styles';
import { Body2 } from '../../../Typography';

interface Props {
  desc: string;
  reverse: boolean;
}

const CardDesc: React.FC<Props> = ({ desc, reverse }) => {
  return (
    <Desc reverse={reverse}>
      <Body2 secondary>{desc}</Body2>
    </Desc>
  );
};

export default CardDesc;
