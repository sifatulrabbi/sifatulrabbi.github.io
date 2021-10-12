import React from 'react';
import { TitleH1, TitleH2 } from './styles';
import { Props } from './types';

const H2 = (props: Props) => {
  return (
    <h2>
      <TitleH2
        secondary={props.secondary}
        gutterBottom={props.gutterBottom}
        className={props.classes}
      >
        {props.children}
      </TitleH2>
    </h2>
  );
};

export default H2;
