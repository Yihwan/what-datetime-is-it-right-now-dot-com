import styled from '@emotion/styled';
import { TYPOGRAPHY, COLORS, MEDIA_QUERIES } from 'src/constants/style';

export const LaunchpadContainer = styled.main`
  font-family: ${TYPOGRAPHY.FONT_FAMILY.launchpad};
  box-sizing: border-box;
  grid-gap: 2px;
  border: 2px solid ${COLORS.grey};
  background-color: ${COLORS.black};
  
  
  ${MEDIA_QUERIES.mdUp} {
    display: grid; 
    grid-template-columns: minmax(250px, 500px) minmax(50%, 1fr);
    grid-template-rows: repeat(6, min-content);
  }

  ${MEDIA_QUERIES.xlUp} {
    grid-template-columns: minmax(250px, 30vw) minmax(20vw, 30vw) minmax(35%, 1fr);
    grid-template-rows: min-content minmax(25vh, 1fr) min-content minmax(20vh, 1fr) minmax(33vh, 1fr);
    max-height: 100vh;
  }
`;