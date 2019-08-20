import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const NewsFeedContainer = styled.section`
  line-height: 1.15;

  .react-tabs__tab-list {
    display: flex;
    font-size: 0.9rem;
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

export const BlooberbBar = styled.div`
  border-top: ${SPACER.x2small} solid ${COLORS.greyL1};
  height: ${SPACER.base};
  background: linear-gradient(to right, ${COLORS.blooberbOrange} 75%, transparent 30%);
  margin-bottom: 0.75rem;
`

export const NewsArticle = styled.article`
  display: flex; 
  padding: 0 ${SPACER.small};
  margin-bottom: ${SPACER.base};
`;

export const TimePublished = styled.div`
  margin-right: ${SPACER.small};
  color: ${COLORS.greyL1};
`;

export const Title = styled.div`
  color: ${COLORS.white};
  margin-bottom: ${SPACER.xsmall};
`;
  
export const Source = styled.a`
  color: ${COLORS.blueL1};
  text-decoration: none;
`;

export const Excerpt = styled.div`
  color: ${COLORS.blooberbOrange};
`;

export const Bullets = styled.ul`
  color: ${COLORS.blooberbOrange};
  list-style: disc inside; 

  span { 
    margin-left: ${SPACER.base};
  }

  li {
    margin: ${SPACER.x2small} 0;
  }
`;