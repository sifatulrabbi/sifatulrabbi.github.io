import React from 'react';
import { TitleH3 } from './styles';
import { Props } from './types';

const H3 = (props: Props) => {
  return (
    <h3 className={props.classes}>
      <TitleH3 secondary={props.secondary} gutterBottom={props.gutterBottom}>
        {props.children}
      </TitleH3>
    </h3>
  );
};

export default H3;
