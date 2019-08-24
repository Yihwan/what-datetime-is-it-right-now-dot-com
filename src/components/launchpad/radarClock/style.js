import styled from '@emotion/styled';
import { MEDIA_QUERIES, SPACER } from 'src/constants/style';

export const RadarClockContainer = styled.section`
  width: 100%;
  height: 270px;

  ${MEDIA_QUERIES.mdUp} {
    top: 0;
    position: absolute;
    height: 100%;
  }
`;

export const Label = styled.div`
  font-size: 0.8rem;
  position: absolute;
  top: ${({ topPercent }) => topPercent};
  left: ${({ leftPercent }) => leftPercent};
  display: flex; 
  flex-direction: column;
  max-width: 100px;
  line-height: 1.2;
  
  > span:first-of-type {
    color: ${({ color }) => color};
    margin-top: ${SPACER.xsmall};
    display: block;
  }
`;