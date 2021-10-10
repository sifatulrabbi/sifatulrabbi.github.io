import React from 'react';
import { Body1Wrapper } from './styles';
import { Props } from './types';

const Body1 = (props: Props) => {
  return (
    <Body1Wrapper
      secondary={props.secondary}
      gutterBottom={props.gutterBottom}
      className={props.classes}
    >
      {props.children}
    </Body1Wrapper>
  );
};

export default Body1;
