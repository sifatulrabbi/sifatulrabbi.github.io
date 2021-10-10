import React from 'react';
import { Caption } from '../Typography';
import { Wrapper } from './button.styles';

interface Props {
  callBack?: (args: any) => any;
  big?: true;
  label: string;
  classes?: string;
}
interface State {}

class Button extends React.Component<Props, State> {
  handleClick(e: React.SyntheticEvent<HTMLButtonElement>) {
    if (this.props.callBack) {
      return this.props.callBack(e);
    }
  }

  render() {
    const { big, classes, label } = this.props;

    return (
      <Wrapper
        big={big}
        onClick={this.handleClick.bind(this)}
        className={classes}
      >
        <Caption big>{label}</Caption>
      </Wrapper>
    );
  }
}

export default Button;
