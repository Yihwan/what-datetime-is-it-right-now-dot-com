import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const ActionContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
`;

export const HomeLink = styled.a`
  background-color: ${COLORS.greyL1};
  padding: 1px ${SPACER.small};
  color: ${COLORS.white};
  text-decoration: none;
  margin-right: ${SPACER.x2small};
`;

export const CurrentTimeContainer = styled.div`
  background-color: ${COLORS.blooberbOrange};
  padding: 1px ${SPACER.small};
  color: ${COLORS.black};
`;

export const A3Z = styled.button`
  background-color: ${COLORS.red};
  color: ${COLORS.white};
  cursor: pointer;
`;