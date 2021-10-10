import styled from 'styled-components';
import { IStyles } from './types';

export const TitleH1 = styled.span<IStyles>`
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
  color: ${({ theme, secondary }) =>
    secondary ? theme.palette.grayish : theme.palette.light};
  font-weight: 700;
`;

export const TitleH2 = styled(TitleH1)<IStyles>`
  ${TitleH1};
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
`;

export const TitleH3 = styled(TitleH2)<IStyles>`
  ${TitleH2};
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
`;

export const Body1Wrapper = styled.p<IStyles>`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  line-height: 1.5;
  color: ${({ theme, secondary }) =>
    secondary ? theme.palette.grayish : theme.palette.light};
`;

export const Body2Wrapper = styled(Body1Wrapper)<IStyles>`
  ${Body1Wrapper};
  font-size: ${({ theme }) => theme.typography.fontSize.body2};
`;

export const CaptionWrapper = styled.span<{
  secondary?: true;
  big?: true;
  gutterBottom?: true;
}>`
  font-weight: 400;
  font-size: ${({ theme, big }) =>
    big ? theme.typography.fontSize.body1 : theme.typography.fontSize.caption};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  color: ${({ theme, secondary }) =>
    secondary ? theme.palette.grayish : theme.palette.main};
  line-height: 1.5;
`;
