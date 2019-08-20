import styled from '@emotion/styled'; 
import { SPACER, COLORS } from 'src/constants/style';

export const TileButton = styled.button`
  display: flex; 
  flex-direction: column;
  width: 100%; 
  height: ${SPACER.x4large};
  border: none;
  text-align: left; 
  color: ${COLORS.white};
  overflow: hidden;
  
  padding: ${SPACER.xsmall};
  margin-bottom: ${SPACER.x2small};

  font-family: 'Source Code Pro';

  background-color: ${({ isSelected }) => isSelected ? COLORS.greenD1 : COLORS.redD1 };

`;

export const Title = styled.span`
  display: block;
  margin-bottom: ${SPACER.x2small};
`;

export const Value = styled.span`
  display: block;
  font-size: 13px;
`;