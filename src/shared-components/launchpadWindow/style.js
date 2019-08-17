import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const WindowContainer = styled.div`
  box-shadow:0 0 0 2px ${COLORS.grey};
  padding: ${SPACER.small} ${SPACER.xsmall};
  overflow: auto;
`;

export const WindowTitle = styled.div`
  color: ${COLORS.grey};
  margin-bottom: ${SPACER.small};
`;