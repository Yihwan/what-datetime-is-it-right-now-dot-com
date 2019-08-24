import styled from '@emotion/styled';
import { COLORS, SPACER, MEDIA_QUERIES, TYPOGRAPHY } from 'src/constants/style';

export const customModalStyles = {
  content: {
    fontFamily: TYPOGRAPHY.FONT_FAMILY.launchpad,
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'unset',
    bottom: 'unset',
    transform: 'translate(-50%, -50%)',
    backgroundColor: COLORS.black,
    color: COLORS.white,
    border: `${SPACER.x2small} solid ${COLORS.blooberbOrange}`,
    borderRadius: 0,
    maxWidth: '500px',
    width: '95vw',
    minHeight: '400px',
    margin: `auto`,
    padding: 0,
    height: 'auto',
    overflow: 'auto',
  },
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    zIndex: 10,
  }
};

export const WindowContainer = styled.div`
  ${({ componentName }) => GRID_HELPER[componentName]};
  box-shadow:0 0 0 2px ${COLORS.grey};
  padding: ${SPACER.small} ${SPACER.xsmall};
  padding-top: 0; 
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
  align-items: stretch;

  position: relative;
`;

export const Menu = styled.div`
  display: flex; 
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${COLORS.black};
  z-index: 1;
  padding-top: ${SPACER.small};
`;

export const OptionsButton = styled.button`
  padding: 0 ${SPACER.small};
  font-size: 0.75rem;
  margin-top: -${SPACER.xsmall};
  background-color: transparent;
  color: ${COLORS.greyL1};
  border: none;

  &:focus {
    outline: ${SPACER.x2small} solid ${COLORS.blooberbOrange};
  }
`;

export const ControlButton = styled.button`
  padding: 0 ${SPACER.small};

  margin-top: -${SPACER.xsmall};
  background-color: transparent;
  color: ${COLORS.greyL1};
  border: none;

  &:focus {
    outline: ${SPACER.x2small} solid ${COLORS.blooberbOrange};
  }
`;

export const WindowTitle = styled.div`
  color: ${COLORS.greyL1};
  margin-bottom: ${SPACER.small};
  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
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

export const ModalHeader = styled.div`
  background-color: ${COLORS.purple};
  padding: ${SPACER.small} ${SPACER.base};
  display: flex; 
  justify-content: space-between;
`;