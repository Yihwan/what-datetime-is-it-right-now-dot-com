import styled from '@emotion/styled';
import { TYPOGRAPHY } from 'src/constants/style';

export const LaunchpadContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 33vh 33vh 33vh;
  grid-gap: 2px;
  box-sizing: border-box;
  border: 2px solid palegreen;
  max-height: 100vh;

  font-family: ${TYPOGRAPHY.FONT_FAMILY.launchpad};
`;