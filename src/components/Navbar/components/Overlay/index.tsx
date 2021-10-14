import React from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
  setActive: (arg: boolean) => void;
}

const Wrapper = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 120vh;
  width: 100vh;
  z-index: -2;
  background-color: ${({ theme }) => theme.palette.transDark};
  transition: ${({ theme }) => theme.transition('transform')};
  transform: ${({ active }) =>
    active ? `translate(0%, 0%)` : `translate(150%, 0%)`};
`;

const Overlay: React.FC<Props> = ({ setActive, active }) => {
  const handleClick = (): void => {
    setActive(false);
  };

  return <Wrapper active={active} onClick={handleClick} />;
};

export default Overlay;
