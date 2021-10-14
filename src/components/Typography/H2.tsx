import React from 'react';
import { TitleH2 } from './styles';
import { Props } from './types';

const H2 = (props: Props) => {
  return (
    <h2 className={props.classes}>
      <TitleH2 secondary={props.secondary} gutterBottom={props.gutterBottom}>
        {props.children}
      </TitleH2>
    </h2>
  );
};

export default H2;
