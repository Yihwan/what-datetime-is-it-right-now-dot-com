import styled from '@emotion/styled';
import { COLORS, SPACER, TYPOGRAPHY } from 'src/constants/style';

export const TableContainer = styled.div`
  overflow: scroll;
  flex: 1;
  height: 100%;
  max-width: 300px;
`;

export const RegionTable = styled.table`
  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
  line-height: 1.15;
  width: 95%;

  thead {
    background-color: ${COLORS.grey};
    color: ${COLORS.whiteD1};
    border: 1px solid ${COLORS.greyD1};

    th {
      padding:${SPACER.xsmall} ${SPACER.x2small};
      white-space: nowrap;
      min-width: 60px;

      span {
        color: ${COLORS.blueL1};
      }
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
    border: 1px solid transparent;

    td {
      padding: ${SPACER.x2small};
      border: 1px solid ${COLORS.black};
    }

    td:first-of-type {
      background-color: ${COLORS.black};
      color: ${COLORS.blooberbOrange};
    }
    
    td:not(:first-of-type) {
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      text-align: right;
      padding-right: ${SPACER.xsmall};
    }
  }
`;