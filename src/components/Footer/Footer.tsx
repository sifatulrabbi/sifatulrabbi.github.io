import React from 'react';
import { Caption } from '../Typography';
import { Wrapper } from './footer.styles';

const Footer: React.FC = () => {
  const handleSeeSource = (): void => {
    window.open('https://github.com/temujins/temujins.github.io', '_blank');
  };

  return (
    <Wrapper>
      <Caption secondary>Built with 💙 & TypeScript by Sifatul Rabbi</Caption>
      <button onClick={handleSeeSource}>
        <Caption>See source!</Caption>
      </button>
    </Wrapper>
  );
};

export default Footer;
