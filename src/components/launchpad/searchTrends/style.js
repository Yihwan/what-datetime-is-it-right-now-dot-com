
import styled from '@emotion/styled';
import { COLORS, SPACER, TYPOGRAPHY } from 'src/constants/style';

export const SearchTrendsContainer = styled.section`
  .react-tabs__tab-list {
    display: flex;
    font-size: ${TYPOGRAPHY.FONT_SIZE.label};
    border-bottom: 2px solid ${COLORS.greyL1};
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
    background-color: ${COLORS.greyL1};
    color: ${COLORS.black};
    border-bottom: 1px solid ${COLORS.grey};
  }
`;