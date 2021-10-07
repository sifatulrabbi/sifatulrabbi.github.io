import React from 'react';
import { Wrapper } from './content.styles';

interface Props {
  children: React.ReactNode;
}

class Content extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default Content;
