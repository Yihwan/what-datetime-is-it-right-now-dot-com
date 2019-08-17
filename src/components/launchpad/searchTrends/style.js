import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const SearchTrendsContainer = styled.section`


  .react-tabs__tab-list {
    display: flex; 
  }

  .react-tabs__tab {
    padding: ${SPACER.xsmall} ${SPACER.base} ${SPACER.xsmall} ${SPACER.small};
    margin-right: ${SPACER.xsmall};
    background-color: ${COLORS.grey};
    cursor: pointer;
    clip-path: polygon(0 0, calc(100% - 3px) 0, 100% 100%, 0% 100%);

    max-width: 100px;
    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap;
  }
  
  .react-tabs__tab--selected {
    background-color: ${COLORS.blueL1};
  }
`;