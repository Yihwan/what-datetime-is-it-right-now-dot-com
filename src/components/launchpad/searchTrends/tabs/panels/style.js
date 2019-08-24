import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const SearchTerm = styled.div`
  position: relative;
  display: flex; 
  align-items: center;}
  color: ${COLORS.white};
  margin: ${SPACER.small} ${SPACER.xsmall};

  > div:nth-of-type(2) {
    background-color: ${COLORS.blooberbOrange};
    color: ${COLORS.black};
    padding: ${SPACER.xsmall};
    margin-left: ${SPACER.small};
    width: 35%;
    max-width: 400px;
    min-width: 270px;
  }

  > div:last-of-type {
    margin-left: ${SPACER.small};
    
    a {
      color: ${COLORS.blueL1};
      text-decoration: none; 
    }
  }
`;

export const TabPanelContent = styled.div`
  position: absolute; 
  height: calc(100% - 110px);
  width: 100%;

  display: flex; 
`;