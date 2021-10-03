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

const BodyText: React.FC<Props> = ({ text }) => {
  return (
    <Wrapper>
      <span className='text'>{text}</span>
    </Wrapper>
  );
};

export default BodyText;
