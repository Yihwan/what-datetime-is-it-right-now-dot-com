import styled from '@emotion/styled';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { COLORS, SPACER } from 'src/constants/style';

export const ActionContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
`;

export const HomeLink = styled(AniLink)`
  background-color: ${COLORS.greyL1};
  padding: ${SPACER.x2small} ${SPACER.small};
  color: ${COLORS.white};
  text-decoration: none;
  margin-right: ${SPACER.x2small};
`;

export const CurrentTimeContainer = styled.div`
  background-color: ${COLORS.blooberbOrange};
  padding: ${SPACER.x2small} ${SPACER.small};
  color: ${COLORS.black};
`;

export const AZ5Button = styled.button`
  background-color: ${COLORS.red};
  color: ${COLORS.white};
`;