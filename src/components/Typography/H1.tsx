import React from 'react';
import { TitleH1 } from './styles';
import { Props } from './types';

const H1 = (props: Props) => {
  return (
    <h1 className={props.classes}>
      <TitleH1 secondary={props.secondary} gutterBottom={props.gutterBottom}>
        {props.children}
      </TitleH1>
    </h1>
  );
};

export default H1;
