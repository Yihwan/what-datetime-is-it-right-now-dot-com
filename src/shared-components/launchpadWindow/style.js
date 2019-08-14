import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const WindowContainer = styled.div`
  border: 1px solid ${COLORS.grey};
  padding: ${SPACER.xsmall};
  overflow: auto;
  margin: 0.5px;
`;

export const WindowTitle = styled.div`
  color: ${COLORS.grey};
  margin-bottom: ${SPACER.xsmall};
`;