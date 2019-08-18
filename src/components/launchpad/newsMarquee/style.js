import styled from '@emotion/styled';
import { MEDIA_QUERIES, SPACER } from 'src/constants/style';

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
  grid-column: 1 / 2;
  padding-top: ${SPACER.small};
  font-size: 1rem;
`;
