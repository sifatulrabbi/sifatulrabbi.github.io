import React from 'react';
import { EmailWrapper } from './styles';
import { Caption } from '../Typography';

const Email: React.FC = () => {
  const gotoLink = (): void => {
    window.location.href = 'mailto:mdsifatulislam.rabbi@gmail.com';
  };

  return (
    <EmailWrapper>
      <button onClick={gotoLink}>
        <Caption secondary>mdsifatulislam.rabbi@gmail.com</Caption>
      </button>
    </EmailWrapper>
  );
};

export default Email;
