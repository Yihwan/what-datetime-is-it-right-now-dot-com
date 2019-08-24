import styled from '@emotion/styled';
import { COLORS, SPACER, TYPOGRAPHY } from 'src/constants/style';

const RANDOM_COLORS = [
  COLORS.red,
  COLORS.redD1,
  COLORS.green,
  COLORS.greenD1,
];

export const TimezoneGridContainer = styled.section`
  overflow: auto;
  max-height: 33vh;

  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
`;

export const TimezoneGridTable = styled.table`
  overflow: hidden;
  border-collapse: separate;

  thead {
    td:not(:first-of-type) {
      border-left: 1px solid ${COLORS.black};
      border-bottom: 1px solid ${COLORS.black};
    }
    tr:first-of-type {
      text-align: right;

      td:not(:first-of-type) {
        background-color: ${COLORS.grey};
        padding: ${SPACER.x2small};
      }
    }

    tr:not(:first-of-type) {
      td:not(:first-of-type) {
        background-color: ${COLORS.blooberbOrange};
      }
    }
  }

  tbody {
    tr {
      td:first-of-type {
        padding-right: ${SPACER.xsmall};
        color: ${COLORS.blooberbOrange};
      }
      td:not(:first-of-type) {
        border-left 1px solid ${COLORS.black};
      }
    }

    tr:not(:last-of-type) {
      td {
        border-bottom: 1px solid ${COLORS.black};
      }
    }
  }
`;

export const ColorableCell = styled.td`
  background-color: ${({ rand }) => RANDOM_COLORS[rand] };
  white-space: pre;
  padding: 1px ${SPACER.x2small} 1px ${SPACER.large};
  color: ${COLORS.whiteD1};
`;

export const ModalContainer = styled.div`
  padding: ${SPACER.base} ${SPACER.large};
  width: 100%; 
  box-sizing: border-box;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  line-height: 1.15;
`;

export const ActivateButton = styled.button`
  padding: ${SPACER.small} ${SPACER.base};
  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
  margin-top: ${SPACER.base};
  background-color: ${COLORS.purple};
  color: ${COLORS.white};
  border: 2px solid ${COLORS.blooberbOrange};

  &:focus {
    outline: ${SPACER.x2small} solid ${COLORS.blooberbOrange};
  }
`;