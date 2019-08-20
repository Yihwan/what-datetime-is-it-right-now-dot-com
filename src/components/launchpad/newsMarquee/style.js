import styled from '@emotion/styled';
import { MEDIA_QUERIES, SPACER, COLORS } from 'src/constants/style';

export const GridHelper = styled.div`
  ${MEDIA_QUERIES.mdUp} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  ${MEDIA_QUERIES.lgUp} {
    grid-row: 3 / 4;
  }
`;

export const MarqueeContainer = styled.div`
  font-size: 1rem;
  padding: ${SPACER.xsmall} 0;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
`;
