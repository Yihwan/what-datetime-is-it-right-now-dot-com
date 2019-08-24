import styled from '@emotion/styled';
import { SPACER, COLORS, TYPOGRAPHY } from 'src/constants/style';

export const Button = styled.button`
  padding: 0 ${SPACER.small};
  font-size: ${TYPOGRAPHY.FONT_SIZE.label};
  margin-top: -${SPACER.xsmall};
  background-color: transparent;
  color: ${COLORS.white};
  border: none;

  &:focus {
    outline: ${SPACER.x2small} solid ${COLORS.blooberbOrange};
  }
`;