import styled from '@emotion/styled';
import { COLORS, TYPOGRAPHY, SPACER, MEDIA_QUERIES } from 'src/constants/style';

export const TimestampContainer = styled.div`
  width: 100vw; 
  height: 100vh; 
  background-color: rgba(255, 254, 252, 1);

  > div {
    color: ${COLORS.greyD1};
    line-height: 1.1;
    position: absolute; 
    top: 30%; 
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    max-width: 340px;
    width: 80%;

    font-family: ${TYPOGRAPHY.FONT_FAMILY.system};
    font-weight: bold;
    font-size: 3rem;

    ${MEDIA_QUERIES.mdUp} {
      font-size: 4rem;
      top: 35%;
      max-width: 400px;
    }
  }
`;

export const LaunchpadLinkContainer = styled.nav`
  background-color: ${COLORS.blooberbOrange}; 
  width: ${SPACER.x3large};
  height: ${SPACER.x3large};
  border-radius: 50%;
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-bottom: ${SPACER.base};

  > a {
    text-decoration: none; 
    color: ${COLORS.white};
    font-size: 1.5rem;
  }
`;