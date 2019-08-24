import styled from '@emotion/styled';
import { COLORS, SPACER, TYPOGRAPHY, MEDIA_QUERIES } from 'src/constants/style';

export const TileColumnContainer = styled.div`
  width: 25%;
  max-width: 150px; 
  max-height: 28vh;

  ${MEDIA_QUERIES.lgUp} {
    max-height: 40vh;
  }

  ${MEDIA_QUERIES.xlUp} {
    max-height: 30vh;
  }

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