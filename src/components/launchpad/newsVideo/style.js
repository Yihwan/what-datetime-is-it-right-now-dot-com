import styled from '@emotion/styled';
import { MEDIA_QUERIES } from 'src/constants/style';

export const GridHelper = styled.div`
  display: flex; 
  min-height: 0;
  ${MEDIA_QUERIES.mdUp} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const NewsVideoContainer = styled.section`
  overflow: hidden; 
  padding-top: 56.25%; 
  position: relative;

  iframe {
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
  }
`;

