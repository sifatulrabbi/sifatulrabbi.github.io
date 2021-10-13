import styled from 'styled-components';

export const BGImg = styled.div<{ img: string }>`
  flex: 1;
  height: clamp(200px, 25vw, 350px);
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  ${({ theme }) => theme.overlay()};
`;
