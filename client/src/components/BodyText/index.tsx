import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: max-content;

  .text {
    line-height: ${({ theme }) => theme.lineHeight};
    color: ${({ theme }) => theme.palette.dark};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.fontSize};
  }
`;

class BodyText extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return (
      <Wrapper>
        <span className='text'>{text}</span>
      </Wrapper>
    );
  }
}

export default BodyText;
