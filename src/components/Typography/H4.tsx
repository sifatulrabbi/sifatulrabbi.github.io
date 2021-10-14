import React from 'react';
import { TitleH4 } from './styles';
import { Props } from './types';

const H4 = (props: Props) => {
  return (
    <h4 className={props.classes}>
      <TitleH4 secondary={props.secondary} gutterBottom={props.gutterBottom}>
        {props.children}
      </TitleH4>
    </h4>
  );
};

export default H4;
