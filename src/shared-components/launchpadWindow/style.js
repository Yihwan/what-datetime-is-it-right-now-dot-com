import styled from '@emotion/styled';
import { COLORS, SPACER, MEDIA_QUERIES } from 'src/constants/style';


export const WindowContainer = styled.div`
  ${({ componentName }) => GRID_HELPER[componentName]};
  box-shadow:0 0 0 2px ${COLORS.grey};
  padding: ${SPACER.small} ${SPACER.xsmall};
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
  align-items: stretch;
`;

export const WindowTitle = styled.div`
  color: ${COLORS.grey};
  margin-bottom: ${SPACER.small};
`;


const GRID_HELPER = {
  Home: `
    ${MEDIA_QUERIES.mdUp} {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  `,
  DatetimeSettings: `
    ${MEDIA_QUERIES.mdUp} {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
    
    ${MEDIA_QUERIES.lgUp} {
      grid-column: 2 / 3;
      grid-row: 1 / 3
      ;
    }
  `,
  RadarClock: `
    ${MEDIA_QUERIES.mdUp} {
      grid-column: 2 / 3;
      grid-row: 3 / 5;
    }
    ${MEDIA_QUERIES.lgUp} {
      grid-column: 2 / 3;
      grid-row: 3 / 5;
    }
  `,
  NewsFeed: `
    ${MEDIA_QUERIES.mdUp} {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
    ${MEDIA_QUERIES.lgUp} {
      grid-column: 1 / 2;
      grid-row: 4 / 6;
    }
  `,
  TimezoneDetail: `
    ${MEDIA_QUERIES.mdUp} {
      grid-column: 1 / 2;
      grid-row: 5 / 6;
    }
    ${MEDIA_QUERIES.lgUp} {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
  `,
  SearchTrends: `
    ${MEDIA_QUERIES.mdUp} {
      grid-column: 2 / 3;
      grid-row: 5 / 6;
    }
    ${MEDIA_QUERIES.lgUp} {
      grid-column: 3 / 4;
      grid-row: 3 / 5;
    }  
  `,
  TimezoneGrid: `
    ${MEDIA_QUERIES.mdUp} {
      grid-column: 1 / 3;
      grid-row: 6 / 7;
    }
    ${MEDIA_QUERIES.lgUp} {
      grid-column: 2 / 4;
      grid-row: 5 / 6;
    }  
  `,
};