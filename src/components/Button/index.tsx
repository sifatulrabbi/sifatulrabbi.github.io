import React from 'react';
import { Caption } from '../Typography';
import { Wrapper } from './button.styles';

interface Props {
  callBack?: (args: any) => any;
  big?: true;
  label: string;
  classes?: string;
}

const Button: React.FC<Props> = ({ big, callBack, label, classes }) => {
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (typeof callBack === 'function') {
      return callBack(e);
    } else return callBack;
  };

  return (
    <Wrapper big={big} onClick={handleClick} className={classes}>
      <Caption>{label}</Caption>
    </Wrapper>
  );
};

export default Button;
