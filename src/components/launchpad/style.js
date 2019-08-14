import styled from '@emotion/styled';
import { TYPOGRAPHY } from 'src/constants/style';

export const LaunchpadContainer = styled.main`
  display: grid;
  grid-template-columns: 30vw 30vw 40vw; 
  grid-template-rows: 33vh 33vh 33vh;

  font-family: ${TYPOGRAPHY.FONT_FAMILY.launchpad};
`;