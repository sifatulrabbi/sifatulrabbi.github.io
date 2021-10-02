import React, { Component } from 'react';
import { Wrapper } from './content.styles';

interface Props {
    children: React.ReactNode;
}

class index extends Component<Props> {
    render() {
        return <Wrapper>{this.props.children}</Wrapper>;
    }
}

export default index;
