import styled from '@emotion/styled';
import { COLORS } from 'src/constants/style';

export const TimezoneDetailContainer = styled.section`
  overflow: auto;
  max-height: 33vh;
`;

export const TimezoneDetailTable = styled.table`
  table-layout: fixed;

  thead {
    background-color: ${COLORS.grey};
    color: ${COLORS.whiteD1};
  }

  tbody {
    color: ${COLORS.blooberbOrange};
  }
`;

export const TimeCell = styled.td`
  color: ${COLORS.blueL1};
`;

export const DateCell = styled.td`

`;

export const RegionCell = styled.td`
  color: ${COLORS.white};
`;

export const ColorCell = styled.td`
  color: ${({ signal }) => signal ? COLORS.greenL1 : COLORS.redL1 };
`;