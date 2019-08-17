import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const TileColumnContainer = styled.div`
  width: 125px;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 260px;
  position: relative; 
`;

export const Title = styled.div`
  padding: ${SPACER.xsmall};
  background-color: ${COLORS.grey};
  margin-bottom: ${SPACER.x2small};
  position: sticky;
  top: 0;
`;