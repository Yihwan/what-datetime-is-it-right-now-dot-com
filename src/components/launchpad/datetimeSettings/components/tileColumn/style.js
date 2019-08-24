import styled from '@emotion/styled';
import { COLORS, SPACER, TYPOGRAPHY } from 'src/constants/style';

export const TileColumnContainer = styled.div`
  width: 25%;
  max-width: 150px; 
  min-height: 29vh; 
  max-height: 29vh;

  box-sizing: border-box;
  overflow-y: auto;
  position: relative; 

  &:not(:last-of-type) {
    margin-right: ${SPACER.small};
  }
`;

export const Title = styled.div`
  padding: ${SPACER.xsmall} ${SPACER.small};
  background-color: ${COLORS.grey};
  margin-bottom: ${SPACER.xsmall};
  position: sticky;
  top: 0;
  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
  line-height: 1.15;
  display: flex; 
  justify-content: space-between;

  > div { 
    color: ${COLORS.blueL1};
  }
`;