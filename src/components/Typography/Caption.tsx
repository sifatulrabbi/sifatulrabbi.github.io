import React from 'react';
import { CaptionWrapper } from './styles';
import { Props } from './types';

interface IProps extends Props {
  big?: true;
}

const Caption = (props: IProps) => {
  return (
    <CaptionWrapper
      big={props.big}
      secondary={props.secondary}
      gutterBottom={props.gutterBottom}
      className={props.classes}
    >
      {props.children}
    </CaptionWrapper>
  );
};

export default Caption;
