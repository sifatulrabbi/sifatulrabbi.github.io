import React from 'react';
import { Props } from './types';
import { Body2Wrapper } from './styles';

const Body2 = (props: Props) => {
  return (
    <Body2Wrapper
      secondary={props.secondary}
      gutterBottom={props.gutterBottom}
      className={props.classes}
    >
      {props.children}
    </Body2Wrapper>
  );
};

export default Body2;
