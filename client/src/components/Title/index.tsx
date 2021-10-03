import React from 'react';
import styled from 'styled-components';

interface IStyled {
  variant?: 'h1' | 'h2' | 'h3';
}

interface Props extends IStyled {
  text: string;
}

const Wrapper = styled.div<IStyled>`
  width: 100%;
  height: max-content;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  line-height: 1;
  font-weight: 400;
  color: inherit;
  ${({ theme, variant }) =>
    variant === 'h1'
      ? `font-size: ${theme.typography.fontSize.h1};`
      : variant === 'h2'
      ? `font-size: ${theme.typography.fontSize.h2};`
      : variant === 'h3'
      ? `font-size: ${theme.typography.fontSize.h3};`
      : `font-size: ${theme.typography.fontSize.body};
            text-transform: uppercase;
            letter-spacing: 3px;`};
`;

const Title: React.FC<Props> = ({ text, variant }) => {
  return (
    <Wrapper variant={variant}>
      <span className='text' dangerouslySetInnerHTML={{ __html: text }}></span>
    </Wrapper>
  );
};

export default Title;
