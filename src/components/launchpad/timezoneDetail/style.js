import styled from '@emotion/styled';
import { COLORS, TYPOGRAPHY, SPACER } from 'src/constants/style';

export const TimezoneDetailContainer = styled.section`
  overflow: auto;
  max-height: 33vh;
  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
`;

export const TimezoneDetailTable = styled.table`
  width: 100%;

  thead {
    background-color: ${COLORS.grey};
    color: ${COLORS.whiteD1};

    th {
      padding:${SPACER.xsmall} ${SPACER.x2small};
      white-space: nowrap;
      min-width: 60px;
    }

    th:first-of-type {
      text-align: left; 
      margin-right: ${SPACER.small};
    }

    th:not(:first-of-type) {
      text-align: right;
    }
  }

  tbody {
    color: ${COLORS.blooberbOrange};

    td {
      padding: 1px ${SPACER.x2small};
    }

    td:not(:first-of-type) {
      text-align: right;
    }
  }
`;

export const TimeCell = styled.td`
  color: ${COLORS.white};
`;

export const DateCell = styled.td`

`;

export const RegionCell = styled.td`
  background-color: ${COLORS.blueD1};
  color: ${COLORS.white};
  padding-top: ${SPACER.xsmall} !important;
`;

export const ColorCell = styled.td`
  color: ${({ signal }) => signal ? COLORS.greenL1 : COLORS.redL1 };
`;

export const HexCell = styled.td`
  background-color: ${COLORS.purple};
  color: ${COLORS.white};
  min-width: 95px;
`