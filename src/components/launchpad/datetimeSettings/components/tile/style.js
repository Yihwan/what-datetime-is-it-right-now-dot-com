import styled from '@emotion/styled'; 
import { SPACER, COLORS, TYPOGRAPHY } from 'src/constants/style';

export const TileButton = styled.button`
  display: flex; 
  flex-direction: column;
  justify-content: space-around;
  width: 100%; 
  height: ${SPACER.x4large};
  border: none;
  text-align: left; 
  color: ${COLORS.white};
  overflow: hidden;
  
  padding: ${SPACER.xsmall} ${SPACER.small};
  margin-bottom: ${SPACER.xsmall};

  background-color: ${({ isSelected }) => isSelected ? COLORS.greenD1 : COLORS.redD1 };
  border: 1px solid ${({ isSelected }) => isSelected ? COLORS.green : COLORS.red };
`;

export const Title = styled.span`
  display: block;
`;

export const Value = styled.span`
  display: block;
  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
`;