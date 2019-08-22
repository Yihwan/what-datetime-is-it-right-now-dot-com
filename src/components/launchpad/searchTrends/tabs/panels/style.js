import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const SearchTerm = styled.div`
  position: relative;
  display: flex; 
  align-items: center;}
  color: ${COLORS.white};
  margin: ${SPACER.small} ${SPACER.xsmall};

  > div:last-of-type {
    background-color: ${COLORS.blooberbOrange};
    color: ${COLORS.black};
    padding: ${SPACER.xsmall};
    margin-left: ${SPACER.small};
    width: 35%;
    max-width: 400px;
    min-width: 270px;
  }
`;